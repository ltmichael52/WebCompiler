using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using WebCompiler.Models;

namespace WebCompiler.Controllers
{
    public class CSharpController : Controller
    {
        [HttpPost]
        public IActionResult Compile([FromBody] CompileRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.Code))
            {
                return Json(new { Message = "Code cannot be empty" });
            }

            try
            {
                // Lưu code vào file tạm
                var tempFile = Path.GetTempFileName();
                System.IO.File.WriteAllText(tempFile, request.Code);

                // Đường dẫn đến compiler Mono WASM
                var monoCompilerPath = "/path/to/mono-wasm";

                // Biên dịch mã
                var process = new Process
                {
                    StartInfo = new ProcessStartInfo
                    {
                        FileName = monoCompilerPath,
                        Arguments = $"aot-compile --output=output.wasm {tempFile}",
                        RedirectStandardOutput = true,
                        RedirectStandardError = true,
                        UseShellExecute = false,
                        CreateNoWindow = true,
                    }
                };

                process.Start();
                process.WaitForExit();

                if (process.ExitCode != 0)
                {
                    var error = process.StandardError.ReadToEnd();
                    return Json(new { Error = "Compilation error", Details = error });
                }

                // Đọc file WASM thành Base64 string
                var wasmFilePath = "output.wasm";
                var wasmBytes = System.IO.File.ReadAllBytes(wasmFilePath);
                var wasmBase64 = Convert.ToBase64String(wasmBytes);

                // Trả về chuỗi Base64 cho View
                return Json(new { Success = true, WasmData = wasmBase64 });
            }
            catch (System.Exception ex)
            {
                return Json(new { Error = "Runtime error", Details = ex.Message });
            }
        }
    }
}
