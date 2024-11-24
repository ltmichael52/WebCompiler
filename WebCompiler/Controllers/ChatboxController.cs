using Microsoft.AspNetCore.Mvc;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using System.Threading;
using WebCompiler.Models;
using Markdig;
using Google.Apis.Auth.OAuth2;
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

                string endpoint = $"{location}-aiplatform.googleapis.com";
                string path = $"/v1/projects/{projectId}/locations/{location}/publishers/google/models/{modelId}:generateContent";
                string url = $"https://{endpoint}{path}";

                // Path to your service account JSON file
                string serviceAccountJsonPath = _configuration["GoogleCloud:ServiceAccountPath"];

                // Get the Access Token dynamically
                string accessToken = await GetAccessTokenAsync(serviceAccountJsonPath);

                var httpClient = new HttpClient();
                httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", accessToken);
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