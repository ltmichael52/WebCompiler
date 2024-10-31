﻿using System;
using System.Collections.Generic;

namespace WebCompiler.Models;

public partial class Account
{
    public int Id { get; set; }

    public string Username { get; set; } = null!;

    public string Password { get; set; } = null!;

    public virtual ICollection<CompileHistory> CompileHistories { get; set; } = new List<CompileHistory>();
}
