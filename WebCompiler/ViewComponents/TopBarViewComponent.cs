using Microsoft.AspNetCore.Mvc;

namespace WebCompiler.ViewComponents
{
    public class TopBarViewComponent: ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return View("TopBarDefault");
        }
    }
}
