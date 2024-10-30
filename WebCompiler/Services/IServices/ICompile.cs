using WebCompiler.Response;

namespace WebCompiler.Services.IServices
{
    public interface ICompileService
    {
        Task<CompileResponse> ExecuteCSharpCode(string codeRequest);
    }
}
