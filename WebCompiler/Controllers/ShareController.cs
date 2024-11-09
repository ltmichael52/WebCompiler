using Microsoft.AspNetCore.Mvc;
using System.IO;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Microsoft.Extensions.Logging;


namespace WebCompiler.Controllers
{
    public class ShareController : Controller
    {
        private readonly RedisService _redisService;
        private readonly ILogger<ShareController> _logger;

        public ShareController(RedisService redisService, ILogger<ShareController> logger)
        {
            _redisService = redisService;
            _redisService.Connect();
            _logger = logger;

            if (_redisService.IsConnected())
            {
                _logger.LogInformation("Successfully connected to Redis.");
            }
            else
            {
                _logger.LogError("Unable to connect to Redis.");
            }
        }

        [HttpPost]
        public async Task<ActionResult> SaveCode()
        {
            if (!Request.ContentType.Contains("application/json"))
            {
                return BadRequest("Content-Type should be application/json");
            }

            var reader = new StreamReader(Request.Body);
            var jsonData = await reader.ReadToEndAsync();

            if (string.IsNullOrWhiteSpace(jsonData))
            {
                return BadRequest("Empty request body");
            }

            dynamic data = JsonConvert.DeserializeObject(jsonData);
            string content = data?.content;
            string language = data?.lang;
            
            if (content == null)
            {
                return BadRequest("Invalid JSON format");
            }

            string key = Guid.NewGuid().ToString();
            _redisService.SaveCode(key, content, language);

            string shareUrl = Url.Action("ViewCode", "Share", new { key }, Request.Scheme);
            return Json(new { shareUrl });
        }


        public IActionResult ViewCode(string key)
        {
            var code = _redisService.GetCode(key);
            var language = _redisService.GetLanguage(key);

            if (code == null)
            {
                return NotFound();
            }

            ViewBag.Code = code;
            ViewBag.language = language;

            return View();
        }
        
    }
}
