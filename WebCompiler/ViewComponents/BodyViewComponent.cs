using Microsoft.AspNetCore.Mvc;

namespace WebCompiler.ViewComponents
{
    public class BodyViewComponent: ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return View();
        }
    }
}
