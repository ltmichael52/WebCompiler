using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
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
                return View("SideBarDefault");
            }
            else
            {
                List<CompileHistory> cpHistory = _db.CompileHistories
                    .Where(c=>c.AccountId == accountId)
                    .ToList();

                return View("CompileHistory", cpHistory);
            }
        }
    }
}
