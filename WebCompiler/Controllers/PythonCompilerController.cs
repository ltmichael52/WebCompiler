using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using WebCompiler.Models;

namespace WebCompiler.Controllers
{
    namespace PythonWebCompiler.Controllers
    {
        public class PythonCompilerController : Controller
        {
            [HttpGet]
            public IActionResult Index()
            {
                return View();
            }

            [HttpPost]
            public IActionResult Compile(PythonCompiler codeInput)
            {
                if (codeInput == null || string.IsNullOrEmpty(codeInput.Code))
                {
                    return View("Index", new PythonCompiler());
                }

                string result = CompilePythonCode(codeInput.Code);

                return View("Index", new PythonCompiler
                {
                    Code = codeInput.Code,
                    Output = result
                });
            }



            private string CompilePythonCode(string code)
            {
                string result = string.Empty;

                string filePath = Path.Combine(Path.GetTempPath(), "temp_code.py");
                System.IO.File.WriteAllText(filePath, code);

                var startInfo = new ProcessStartInfo
                {
                    FileName = "python",
                    Arguments = filePath,
                    RedirectStandardOutput = true,
                    RedirectStandardError = true,
                    UseShellExecute = false,
                    CreateNoWindow = true,
                };

                using (var process = Process.Start(startInfo))
                {
                    result = process.StandardOutput.ReadToEnd() + process.StandardError.ReadToEnd();
                    process.WaitForExit();
                }

                return result;

            }
        }
    }
}
