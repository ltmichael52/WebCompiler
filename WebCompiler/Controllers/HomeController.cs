using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Razor;
using System.Diagnostics;
using WebCompiler.Models;

namespace WebCompiler.Controllers
{
    public class HomeController : Controller
    {

        public IActionResult Index()
        {
            //HttpContext.Session.SetInt32("language", 1);
            return View();
        }

    }
}
