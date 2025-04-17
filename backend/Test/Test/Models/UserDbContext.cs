using Microsoft.EntityFrameworkCore;

namespace Test.Models {
    public class UserDbContext : DbContext {
        public DbSet<User> Users { get; set; }
        public DbSet<UserDetails> UserDetails { get; set; }

        public UserDbContext(DbContextOptions<UserDbContext> options) : base(options) {
            if (Database.EnsureCreated()) {
                Users.AddRange(
                    new List<User> {
                        new User { UserName = "John", Email = "John@gmail.com", Password = "John", Country = "Finland" },
                        new User { UserName = "Jane", Email = "Jane@gmail.com", Password = "Jane", Country = "Canada" },
                        new User { UserName = "Sam", Email = "Sam@gmail.com", Password = "Sam", Country = "USA" },
                    }
                );
                SaveChanges();

                UserDetails.AddRange(
                    new List<UserDetails>
                    {
                        new UserDetails { UserId = 1, Name = "John" },
                        new UserDetails { UserId = 2, Name = "Jane" },
                        new UserDetails { UserId = 3, Name = "Sam" }
                    }
                );

                SaveChanges();
            }
        }
    }
}
