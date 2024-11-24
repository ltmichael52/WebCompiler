using Google.Apis.Auth.OAuth2;
using Google.Cloud.AIPlatform.V1;
using Google.Protobuf;
using Grpc.Core;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using System.Threading;
using WebCompiler.Models;
using Markdig;
using WebCompiler.Models.DTOs;

namespace WebCompiler.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChatboxController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public ChatboxController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        private SemaphoreSlim _rateLimiter = new SemaphoreSlim(1, 1); // Max 1 concurrent request
        private TimeSpan _rateLimitInterval = TimeSpan.FromMilliseconds(500); // 1 second between requests (adjust)
        private async Task<string> GetAccessTokenAsync(string serviceAccountJsonPath)
        {
            // Load the Service Account JSON key
            GoogleCredential credential;
            using (var stream = new FileStream(serviceAccountJsonPath, FileMode.Open, FileAccess.Read))
            {
                credential = GoogleCredential.FromStream(stream)
                    .CreateScoped("https://www.googleapis.com/auth/cloud-platform");
            }

            // Request an access token
            var token = await credential.UnderlyingCredential.GetAccessTokenForRequestAsync();
            return token;
        }

        [HttpPost("sendMessage")]
        public async Task<IActionResult> SendMessage([FromBody] ChatRequest request)
        {
            await _rateLimiter.WaitAsync(); // Wait for the rate limiter
            try
            {
                string projectId = "gen-lang-client-0697396523";  // Replace with your project ID
                string location = "us-central1"; // Or us-central1 or your model's location
                string modelId = "gemini-1.5-flash-001";  // Or the name of your model
                string apikey = "AIzaSyAZ75d1xM93LG4YPoR99rDObteYJomEifA";  // Your API key

                // Construct the request URL with the API key
                string url = $"https://generativelanguage.googleapis.com/v1/models/{modelId}:generateContent?key={apikey}";

                var httpClient = new HttpClient();
                httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

                var requestBody = new
                {
                    contents = new[] { new { role = "USER", parts = new[] { new { text = request.Message } } } }
                };

                string jsonRequest = System.Text.Json.JsonSerializer.Serialize(requestBody);
                var content = new StringContent(jsonRequest, Encoding.UTF8, "application/json");

                var response = await httpClient.PostAsync(url, content);

                if (response.IsSuccessStatusCode)
                {
                    string responseJson = await response.Content.ReadAsStringAsync();
                    try
                    {
                        dynamic responseData = Newtonsoft.Json.JsonConvert.DeserializeObject(responseJson);
                        string rawResponseText = responseData.candidates[0].content.parts[0].text;

                        // Use Markdig to render Markdown
                        var pipeline = new MarkdownPipelineBuilder().UseAdvancedExtensions().Build();
                        string htmlResponse = Markdig.Markdown.ToHtml(rawResponseText, pipeline);

                        return Ok(new { response = htmlResponse });
                    }
                    catch (Newtonsoft.Json.JsonReaderException jex)
                    {
                        return StatusCode(500, $"Error parsing JSON response: {jex.Message}");
                    }
                    catch (Exception ex)
                    {
                        return StatusCode(500, $"Error processing Gemini response: {ex.Message}");
                    }
                }
                else
                {
                    string errorMessage = await response.Content.ReadAsStringAsync();
                    return StatusCode((int)response.StatusCode, $"Error: {response.StatusCode} - {errorMessage}");
                }
            }
            finally
            {
                await Task.Delay(_rateLimitInterval);  // Wait
                _rateLimiter.Release();                // Release the semaphore         
            }
        }

    }
}