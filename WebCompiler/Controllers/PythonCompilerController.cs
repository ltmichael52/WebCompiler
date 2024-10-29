using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using WebCompiler.Models;

namespace WebCompiler.Controllers
{
    public class PythonCompilerController : Controller
    {
        private readonly ILogger<PythonCompilerController> _logger;

        public PythonCompilerController(ILogger<PythonCompilerController> logger)
        {
            _logger = logger;
        }

        // Trang chủ
        public IActionResult Index()
        {
            return View();
        }

        // Trang Privacy (có thể không cần)
        public IActionResult Privacy()
        {
            return View();
        }

        // Xử lý lỗi
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        // Phương thức để nhận và biên dịch mã Python
        [HttpPost("compile")]
        public IActionResult Compile([FromBody] CompileRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.Code))
            {
                return BadRequest("No code provided.");
            }

            // Gọi phương thức thực thi mã Python
            var result = ExecutePythonCode(request.Code);
            return Ok(new { output = result });
        }

        // Phương thức để thực thi mã Python
        private string ExecutePythonCode(string code)
        {
            // Tạo file tạm thời để lưu mã Python
            var tempFilePath = Path.GetTempFileName() + ".py";
            System.IO.File.WriteAllText(tempFilePath, code);

            // Chạy trình biên dịch/interpreter Python
            var psi = new ProcessStartInfo
            {
                FileName = "python", // Đảm bảo Python đã được cài đặt và thêm vào PATH
                Arguments = tempFilePath,
                RedirectStandardOutput = true,
                RedirectStandardError = true,
                UseShellExecute = false,
                CreateNoWindow = true
            };

            using (var process = Process.Start(psi))
            {
                using (var reader = process.StandardOutput)
                {
                    string result = reader.ReadToEnd();  // Lấy kết quả đầu ra từ Python
                    process.WaitForExit();  // Chờ quá trình hoàn thành
                    return result;
                }
            }
        }
    }

    // Model cho yêu cầu biên dịch
    public class CompileRequest
    {
        public string Code { get; set; }  // Mã Python cần biên dịch
    }
}
