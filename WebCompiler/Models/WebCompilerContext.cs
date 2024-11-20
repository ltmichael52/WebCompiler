using Microsoft.EntityFrameworkCore;

namespace WebCompiler.Models;

public partial class WebCompilerContext : DbContext
{

    private readonly IConfiguration _configuration;

    public WebCompilerContext(DbContextOptions<WebCompilerContext> options, IConfiguration configuration)
        : base(options)
    {
        _configuration = configuration;
    }

    public virtual DbSet<Account> Accounts { get; set; }

    public virtual DbSet<CompileHistory> CompileHistories { get; set; }

    public virtual DbSet<EfmigrationHistory> EfmigrationHistories { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer(_configuration.GetConnectionString("DefaultConnection"));

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
