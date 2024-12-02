using Microsoft.AspNetCore.Mvc;
using Microsoft.Identity.Client;
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

            CompileHistory? cpHistoryOld = db.CompileHistories.FirstOrDefault(c => c.Id == compileId);
            if (cpHistoryOld == null)
            {
                throw new Exception($"No CompileHistory found with ID {compileId}");
            }
           
            switch (cpHistoryOld.CodeLanguage)
            {
                case "csharp":
                    return RedirectToAction("Csharp", "Compile", new { oldCompileId = compileId });
                case "python":
                    return RedirectToAction("Python", "Compile", new { oldCompileId = compileId });
                case "java":
                    return RedirectToAction("Java", "Compile", new { oldCompileId = compileId });
                case "javascript":
                    return RedirectToAction("Javascript", "Compile", new { oldCompileId = compileId });
                case "cpp":
                    return RedirectToAction("Cpp", "Compile", new { oldCompileId = compileId });
                case "r":
                    return RedirectToAction("R", "Compile", new { oldCompileId = compileId });
                case "golang":
                    return RedirectToAction("Go", "Compile", new { oldCompileId = compileId });
                default:
                    return RedirectToAction("Swift", "Compile", new { oldCompileId = compileId });
            }

        }

        [HttpDelete]
        public IActionResult DeleteOldCompile(int compileId)
        {
            CompileHistory? cpHistory = db.CompileHistories.FirstOrDefault(c => c.Id == compileId);
            int accountId = HttpContext.Session.GetInt32("accountId") ?? 1;
            if (cpHistory == null)
            {
                throw new Exception($"No CompileHistory found with ID {compileId}");
            }
            db.CompileHistories.Remove(cpHistory);
            db.SaveChanges();

            List<CompileHistory> cpList = db.CompileHistories.Where(x => x.AccountId == accountId).OrderByDescending(x => x.CompileDate).ToList();
            return PartialView("~/Views/Shared/_CompileHistory.cshtml", cpList);
        }



    }
}
