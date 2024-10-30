using Microsoft.AspNetCore.Mvc;
using WebCompiler.Request;
using WebCompiler.Response;
using WebCompiler.Services.IServices;

namespace WebCompiler.Controllers
{
    public class CompileController : Controller
    {
        private readonly ICompileService _compileService;

        public CompileController(ICompileService compileService)
        {
            _compileService = compileService;
        }
        [HttpGet("CSharp")]
        public IActionResult CSharp()
        {
            return View();
        }

        [HttpPost("CSharp")]
        public async Task<IActionResult> CSharp([FromBody] CompileRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.Code))
            {
                return BadRequest(new CompileResponse
                {
                    IsSuccess = false,
                    Message = "No code provided."
                });
            }

            var result = await _compileService.ExecuteCSharpCode(request.Code);

            if (!result.IsSuccess)
            {
                return BadRequest(result); // Return the CompileResponse in case of errors
            }

            // Assuming you want to return the file path of the compiled WASM
            return Ok(result); // Return the successful compilation result
        }
    }
}
