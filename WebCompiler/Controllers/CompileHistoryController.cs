
using Microsoft.AspNetCore.Mvc;
using WebCompiler.Models;

namespace WebCompiler.Services
{
    public class CompileHistoryController :Controller
    {
        private readonly IHttpContextAccessor _httpContextAccessor;

        private readonly WebCompilerContext db;
        public CompileHistoryController(IHttpContextAccessor httpContextAccessor, WebCompilerContext context)
        {
            _httpContextAccessor = httpContextAccessor;
            db = context;
        }

        [HttpPost]
        public IActionResult SaveCompileHistory(string content, string title)
        {
            HttpContext.Session.SetInt32("language", 1);
            HttpContext.Session.SetInt32("accountId", 1);
            int langauge = HttpContext.Session.GetInt32("language") ?? 0;
            int accountId = HttpContext.Session.GetInt32("accountId") ?? 1;

            CompileHistory newHistory = new CompileHistory
            {
                Title = title,
                CompileDate = DateTime.Now,
                Content = content,
                AccountId = accountId
            };

            // Save to database
            db.CompileHistories.Add(newHistory); // Adjust to match your DbSet name
            db.SaveChanges();

            List<CompileHistory> cpList= db.CompileHistories.Where(x=>x.AccountId == accountId).ToList();
            return PartialView("~/Views/Shared/PartialView/PartialCompileHistory.cshtml", cpList);
        }

        public IActionResult showOldCompile(int compileId)
        {
            CompileHistory cpHistory = db.CompileHistories.FirstOrDefault(c=>c.Id == compileId);
            int language = cpHistory.CodeLanguage;
            HttpContext.Session.SetInt32("language", language);


            return PartialView("~/Views/Shared/PartialView/PartialEditor.cshtml", cpHistory);
        }


    }
}
