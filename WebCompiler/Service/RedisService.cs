using System;
using StackExchange.Redis;
using WebCompiler.Interfaces;

public class RedisService : ICacheService
{
    private readonly string _host;
    private readonly int _port;
    private readonly string _password;
    private ConnectionMultiplexer _connectionMultiplexer;

    public RedisService(string host, int port, string password = null)
    {
        _host = host;
        _port = port;
        _password = password;
    }

    public void Connect()
    {
        try
        {
            var options = new ConfigurationOptions
            {
                EndPoints = { $"{_host}:{_port}" },
                Password = _password,
                AbortOnConnectFail = false
            };
            _connectionMultiplexer = ConnectionMultiplexer.Connect(options);
        }
        catch (RedisConnectionException ex)
        {
            Console.WriteLine($"Redis connection failed: {ex.Message}");
        }
    }

    public bool IsConnected()
    {
        return _connectionMultiplexer?.IsConnected ?? false;
    }

    public void SaveCode(string key, string code)
    {
        if (!IsConnected())
        {
            Console.WriteLine("Not connected to Redis.");
            return;
        }

        try
        {
            var db = _connectionMultiplexer.GetDatabase();
            db.StringSet(key, code);
        }
        catch (RedisException ex)
        {
            Console.WriteLine($"Failed to save code to Redis: {ex.Message}");
        }
    }

    public string GetCode(string key)
    {
        if (!IsConnected())
        {
            Console.WriteLine("Not connected to Redis.");
            return null;
        }

        try
        {
            var db = _connectionMultiplexer.GetDatabase();
            return db.StringGet(key);
        }
        catch (RedisException ex)
        {
            Console.WriteLine($"Failed to retrieve code from Redis: {ex.Message}");
            return null;
        }
    }
}
