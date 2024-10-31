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

    }
}
