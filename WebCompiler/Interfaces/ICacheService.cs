namespace WebCompiler.Interfaces
{
    public interface ICacheService
    {
        void SaveCode(string key, string code, string language);
        string GetCode(string key);
        string GetLanguage(string key);
        bool IsConnected();
    }
}
