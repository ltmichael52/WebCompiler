using Microsoft.AspNetCore.Mvc;

namespace WebCompiler.ViewComponents
{
    public class ScriptViewComponent: ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return View("ScriptDefault");
        }
    }
}
