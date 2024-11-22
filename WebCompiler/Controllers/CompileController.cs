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
            HttpContext.Session.SetString("language","python");
            return View();
        }

        /// <summary>
        /// CSharp Compiler
        /// </summary>
        [HttpGet("csharp")]
        public IActionResult CSharp()
        {
            HttpContext.Session.SetString("language", "csharp");
            return View();
        }

        /// <summary>
        /// CSharp Compiler
        /// </summary>
        [HttpGet("java")]
        public IActionResult Java()
        {
            HttpContext.Session.SetString("language", "java");
            return View();
        }

    }
}
