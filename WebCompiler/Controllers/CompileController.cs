using Microsoft.AspNetCore.Mvc;
using WebCompiler.Models;

namespace WebCompiler.Controllers
{
    public class CompileController : Controller
    {

        private readonly WebCompilerContext db;
        public CompileController(WebCompilerContext context)
        {
            db = context;
        }
        /// <summary>
        /// Python Compiler
        /// </summary>
        [HttpGet("python")]
        public IActionResult Python(int oldCompileId)
        {
            HttpContext.Session.SetString("language", "python");
            return View(getOldCompile(oldCompileId));
        }

        /// <summary>
        /// CSharp Compiler
        /// </summary>
        [HttpGet("csharp")]
        public IActionResult CSharp(int oldCompileId)
        {
            HttpContext.Session.SetString("language", "csharp");
            return View(getOldCompile(oldCompileId));
        }

        /// <summary>
        /// Java Compiler
        /// </summary>
        [HttpGet("java")]
        public IActionResult Java(int oldCompileId)
        {
            HttpContext.Session.SetString("language", "java");
            return View(getOldCompile(oldCompileId));
        }

        /// <summary>
        /// JavaScript Compiler
        /// </summary>
        [HttpGet("javascript")]
        public IActionResult JavaScript(int oldCompileId)
        {
            HttpContext.Session.SetString("language", "javascript");
            return View(getOldCompile(oldCompileId));
        }

        /// <summary>
        /// C++ Compiler
        /// </summary>
        [HttpGet("Cpp")]
        public IActionResult Cpp(int oldCompileId)
        {
            HttpContext.Session.SetString("language", "cpp");
            return View(getOldCompile(oldCompileId));
        }

        /// <summary>
        /// Swift Compiler
        /// </summary>
        [HttpGet("swift")]
        public IActionResult Swift(int oldCompileId)
        {
            HttpContext.Session.SetString("language", "swift");
            return View(getOldCompile(oldCompileId));
        }

        /// <summary>
        /// Go Compiler
        /// </summary>
        [HttpGet("go")]
        public IActionResult Go(int oldCompileId)
        {
            HttpContext.Session.SetString("language", "golang");
            return View(getOldCompile(oldCompileId));
        }

        /// <summary>
        /// R Compiler
        /// </summary>
        [HttpGet("R")]
        public IActionResult R(int oldCompileId)
        {
            HttpContext.Session.SetString("language", "r");
            return View(getOldCompile(oldCompileId));
        }

        public CompileHistory getOldCompile(int oldCompileId)
        {
            return db.CompileHistories.FirstOrDefault(c => c.Id == oldCompileId) ?? new CompileHistory();
        }

    }
}
