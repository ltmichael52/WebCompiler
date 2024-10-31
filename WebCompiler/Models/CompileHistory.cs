using System;
using System.Collections.Generic;

namespace WebCompiler.Models;

public partial class CompileHistory
{
    public int Id { get; set; }

    public DateTime CompileDate { get; set; }

    public string? Content { get; set; }

    public int CodeLanguage { get; set; }

    public string Title { get; set; } = null!;

    public int AccountId { get; set; }

    public virtual Account Account { get; set; } = null!;
}
