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
            HttpContext.Session.SetString("language", "python");
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
        /// Java Compiler
        /// </summary>
        [HttpGet("java")]
        public IActionResult Java()
        {
            HttpContext.Session.SetString("language", "java");
            return View();
        }

        /// <summary>
        /// JavaScript Compiler
        /// </summary>
        [HttpGet("javascript")]
        public IActionResult JavaScript()
        {
            HttpContext.Session.SetString("language", "javascript");
            return View();
        }

        /// <summary>
        /// C++ Compiler
        /// </summary>
        [HttpGet("Cpp")]
        public IActionResult Cpp()
        {
            HttpContext.Session.SetString("language", "cpp");
            return View();
        }

        /// <summary>
        /// Swift Compiler
        /// </summary>
        [HttpGet("swift")]
        public IActionResult Swift()
        {
            HttpContext.Session.SetString("language", "swift");
            return View();
        }

        /// <summary>
        /// Go Compiler
        /// </summary>
        [HttpGet("go")]
        public IActionResult Go()
        {
            HttpContext.Session.SetString("language", "golang");
            return View();
        }

        /// <summary>
        /// R Compiler
        /// </summary>
        [HttpGet("R")]
        public IActionResult R()
        {
            HttpContext.Session.SetString("language", "r");
            return View();
        }

    }
}
