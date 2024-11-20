using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using WebCompiler.Models.DTOs;


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
            if (!Request.ContentType?.Contains("application/json") ?? true)
            {
                return BadRequest("Content-Type should be application/json");
            }

            string jsonData;
            using (var reader = new StreamReader(Request.Body))
            {
                jsonData = await reader.ReadToEndAsync();
            }

            if (string.IsNullOrWhiteSpace(jsonData))
            {
                return BadRequest("Empty request body");
            }

            try
            {
                var data = JsonConvert.DeserializeObject<CodeData>(jsonData);

                if (data == null || string.IsNullOrWhiteSpace(data.Content) || string.IsNullOrWhiteSpace(data.Language))
                {
                    return BadRequest("Invalid JSON format or missing 'content' field");
                }

                string key = Guid.NewGuid().ToString();
                _redisService.SaveCode(key, data.Content, data.Language);

                string? shareUrl = Url.Action("ViewCode", "Share", new { key }, Request.Scheme);
                return Json(new { shareUrl });
            }
            catch (JsonException)
            {
                return BadRequest("Invalid JSON format");
            }
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
