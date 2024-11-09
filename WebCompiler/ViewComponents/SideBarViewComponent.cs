using Microsoft.AspNetCore.Mvc;

namespace WebCompiler.ViewComponents
{
    public class SideBarViewComponent: ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return View();
        }
    }
}
