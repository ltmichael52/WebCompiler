namespace WebCompiler.Response
{
    public class CompileResponse
    {
        public string? FilePath { get; set; }
        public string? Message { get; set; }
        public bool IsSuccess { get; set; }
    }
}
