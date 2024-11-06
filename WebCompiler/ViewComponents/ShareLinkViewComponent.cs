using Microsoft.AspNetCore.Mvc;

namespace WebCompiler.ViewComponents
{
    public class ShareLinkViewComponent: ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return View();
        }
    }
}
