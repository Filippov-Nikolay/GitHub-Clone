using CloneGitHub.DAL.Entities;
using Microsoft.EntityFrameworkCore;

namespace CloneGitHub.DAL.EF
{
    public class CloneGitHubContext : DbContext
    {
        public DbSet<Activity> Activities { get; set; }
        public DbSet<Repository> Repositories { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Subscription> Subscriptions { get; set; }
        public DbSet<UserDetails> UserDetails { get; set; }
        public DbSet<Logger> Loggers { get; set; }

        public CloneGitHubContext(DbContextOptions<CloneGitHubContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // User → Repository (1:M)
            modelBuilder.Entity<User>()
                .HasMany(u => u.Repositories)
                .WithOne(r => r.User)
                .HasForeignKey(r => r.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            // User → Logger (1:M)
            modelBuilder.Entity<User>()
                .HasMany(u => u.Loggers)
                .WithOne(l => l.User)
                .HasForeignKey(l => l.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            // User → UserDetails (1:1)
            modelBuilder.Entity<User>()
                .HasOne(u => u.UserDetails)
                .WithOne(ud => ud.User)
                .HasForeignKey<UserDetails>(ud => ud.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            // Repository → Activity (1:M)
            modelBuilder.Entity<Repository>()
                .HasMany(r => r.Activities)
                .WithOne(a => a.Repository)
                .HasForeignKey(a => a.RepositoryId)
                .OnDelete(DeleteBehavior.Cascade);

            // Subscription (Follower ↔ Followed) (M:M)
            modelBuilder.Entity<Subscription>()
                .HasKey(s => s.Id);

            modelBuilder.Entity<Subscription>()
                .HasOne(s => s.Follower)
                .WithMany()
                .HasForeignKey(s => s.FollowerId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Subscription>()
                .HasOne(s => s.Followed)
                .WithMany()
                .HasForeignKey(s => s.FollowedId)
                .OnDelete(DeleteBehavior.Restrict);


            base.OnModelCreating(modelBuilder);
        }
    }
}
