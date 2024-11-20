using Microsoft.AspNetCore.Mvc;

namespace WebCompiler.Controllers
{
    public class HomeController : Controller
    {

        public IActionResult Index()
        {
            return View();
        }

    }
}
