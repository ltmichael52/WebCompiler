using Microsoft.AspNetCore.Mvc;
using WebCompiler.Models;

namespace WebCompiler.ViewComponents
{
    public class SideBarViewComponent : ViewComponent
    {
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly WebCompilerContext _db;

        public SideBarViewComponent(IHttpContextAccessor httpContextAccessor, WebCompilerContext db)
        {
            _httpContextAccessor = httpContextAccessor;
            _db = db;
        }

        public IViewComponentResult Invoke()
        {
            HttpContext.Session.SetInt32("accountId", 1);
            int accountId = HttpContext.Session.GetInt32("accountId") ?? 0;

            if (accountId == 0)
            {
                return View("_SideBar");
            }
            else
            {
                List<CompileHistory> cpHistory = _db.CompileHistories
                    .Where(c => c.AccountId == accountId)
                    .OrderByDescending(x=>x.CompileDate)
                    .ToList();

                return View("CompileHistory", cpHistory);
            }
        }
    }
}
