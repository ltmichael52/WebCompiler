using Microsoft.AspNetCore.Mvc;

namespace WebCompiler.ViewComponents
{
    public class DrawnerViewComponent: ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return View();
        }
    }
}
