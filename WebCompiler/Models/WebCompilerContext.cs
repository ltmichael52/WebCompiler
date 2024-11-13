using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace WebCompiler.Models;

public partial class WebCompilerContext : DbContext
{
    public WebCompilerContext()
    {
    }

    public WebCompilerContext(DbContextOptions<WebCompilerContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Account> Accounts { get; set; }

    public virtual DbSet<CompileHistory> CompileHistories { get; set; }

    public virtual DbSet<EfmigrationHistory> EfmigrationHistories { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Data Source=66.42.43.15,1433;Initial Catalog=WebCompiler;User ID=sa;Password=Abc@12345;Connect Timeout=30;Encrypt=True;Trust Server Certificate=True;Application Intent=ReadWrite;Multi Subnet Failover=False");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Account>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Account__3213E83F5190530B");

            entity.ToTable("Account");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Password).HasMaxLength(255);
            entity.Property(e => e.Username)
                .HasMaxLength(255)
                .HasColumnName("username");
        });

        modelBuilder.Entity<CompileHistory>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__CompileH__3214EC0704F09127");

            entity.ToTable("CompileHistory");

            entity.Property(e => e.CodeLanguage).HasMaxLength(50);
            entity.Property(e => e.CompileDate).HasColumnType("datetime");
            entity.Property(e => e.Title).HasMaxLength(255);

            entity.HasOne(d => d.Account).WithMany(p => p.CompileHistories)
                .HasForeignKey(d => d.AccountId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_CompileHistory_Account");
        });

        modelBuilder.Entity<EfmigrationHistory>(entity =>
        {
            entity.HasKey(e => e.MigrationId);

            entity.ToTable("EFMigrationHistory");

            entity.Property(e => e.MigrationId).HasMaxLength(150);
            entity.Property(e => e.ProductVersion).HasMaxLength(32);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
