using Microsoft.AspNetCore.Mvc;
using WebCompiler.Models;

namespace WebCompiler.Services
{
    public class CompileHistoryController : Controller
    {

        private readonly WebCompilerContext db;
        public CompileHistoryController(WebCompilerContext context)
        {
            db = context;
        }

        [HttpPost]
        public IActionResult SaveCompileHistory(string content, string title)
        {
            int count = 0;
            ++count;
            string langauge = HttpContext.Session.GetString("language") ?? "";
            int accountId = HttpContext.Session.GetInt32("accountId") ?? 1;

            CompileHistory newHistory = new CompileHistory
            {
                Title = title,
                CompileDate = DateTime.Now,
                Content = content,
                AccountId = accountId,
                CodeLanguage = langauge,
            };

            // Save to database
            db.CompileHistories.Add(newHistory); // Adjust to match your DbSet name
            db.SaveChanges();

            List<CompileHistory> cpList = db.CompileHistories.Where(x => x.AccountId == accountId).OrderByDescending(x => x.CompileDate).ToList();
            return PartialView("~/Views/Shared/_CompileHistory.cshtml", cpList);
        }

        public IActionResult showOldCompile(int compileId)
        {

            CompileHistory? cpHistory = db.CompileHistories.FirstOrDefault(c => c.Id == compileId);
            if (cpHistory == null)
            {
                throw new Exception($"No CompileHistory found with ID {compileId}");
            }
            HttpContext.Session.SetString("language", cpHistory.CodeLanguage);
            switch (cpHistory.CodeLanguage)
            {
                case "csharp":
                    return View("~/Views/Compile/CSharp.cshtml", cpHistory);
            }
            return View("~/Views/Compile/Python.cshtml", cpHistory);

        }

        public IActionResult DeleteOldCompile(int compileId, string currentLanguage)
        {
            CompileHistory? cpHistory = db.CompileHistories.FirstOrDefault(c => c.Id == compileId);
            if (cpHistory == null)
            {
                throw new Exception($"No CompileHistory found with ID {compileId}");
            }
            db.CompileHistories.Remove(cpHistory);
            db.SaveChanges();

            switch (currentLanguage)
            {
                case "csharp":
                    return View("~/Views/Compile/CSharp.cshtml");
            }
            return View("~/Views/Compile/Python.cshtml");
        }



    }
}
