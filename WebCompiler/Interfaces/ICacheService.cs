namespace WebCompiler.Interfaces
{
    public interface ICacheService
    {
        void SaveCode(string key, string code);
        string GetCode(string key);
        bool IsConnected();
    }
}
