using Microsoft.AspNetCore.Mvc;

namespace WebCompiler.Controllers
{
    public class CompileController : Controller
    {

        /// <summary>
        /// Python Compiler
        /// </summary>
        [HttpGet("python")]
        public IActionResult Python()
        {
            ViewBag.language = "python";
            return View();
        }

        /// <summary>
        /// CSharp Compiler
        /// </summary>
        [HttpGet("csharp")]
        public IActionResult CSharp()
        {
            ViewBag.language = "csharp";
            return View();
        }

    }
}
