namespace WebCompiler.Service.Interfaces
{
    public interface IRedisService
    {
        void SaveCode(string key, string code, string language);
        string GetCode(string key);
        string GetLanguage(string key);
        bool IsConnected();
    }
}
