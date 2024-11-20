using StackExchange.Redis;
using WebCompiler.Service.Interfaces;

public class RedisService : IRedisService
{
    private readonly string _host;
    private readonly int _port;
    private readonly string _password;
    private ConnectionMultiplexer _connectionMultiplexer;

    public RedisService(string host, int port, string password)
    {
        _host = host;
        _port = port;
        _password = password;
        _connectionMultiplexer = ConnectionMultiplexer.Connect($"{_host}:{_port},password={_password}");
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

    public void SaveCode(string key, string code, string language)
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
            db.StringSet(key + ":lang", language);
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
            throw new InvalidOperationException("Not connected to Redis.");
        }

        try
        {
            var db = _connectionMultiplexer.GetDatabase();
            var result = db.StringGet(key);

            if (result.IsNullOrEmpty)
            {
                throw new KeyNotFoundException($"The key '{key}' was not found or its value is empty.");
            }

            return result!;
        }
        catch (RedisException ex)
        {
            throw new ApplicationException($"Failed to retrieve the code from Redis: {ex.Message}", ex);
        }
    }

    public string GetLanguage(string key)
    {
        if (!IsConnected())
        {
            throw new InvalidOperationException("Not connected to Redis.");
        }

        try
        {
            var db = _connectionMultiplexer.GetDatabase();
            var result = db.StringGet(key + ":lang");

            if (result.IsNullOrEmpty)
            {
                throw new KeyNotFoundException($"The language for key '{key}' was not found or its value is empty.");
            }

            return result!;
        }
        catch (RedisException ex)
        {
            throw new ApplicationException($"Failed to retrieve language from Redis: {ex.Message}", ex);
        }
    }



    public bool IsConnected()
    {
        return _connectionMultiplexer?.IsConnected ?? false;
    }
}
