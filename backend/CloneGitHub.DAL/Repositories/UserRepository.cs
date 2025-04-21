using System.Threading.Tasks;
using CloneGitHub.DAL.EF;
using CloneGitHub.DAL.Entities;
using CloneGitHub.DAL.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace CloneGitHub.DAL.Repositories
{
    public class UserRepository : IUserRepository {
        private CloneGitHubContext db;


        public UserRepository(CloneGitHubContext _db)
        {
            db = _db;
        }

        public async Task<IEnumerable<User>> GetAllAsync() //GetAllUsers 
        {
            return await db.Users.Include(u => u.UserDetails).ToListAsync();
        }

        public async Task<User> GetUserByEmail(string email)
        {
            return await db.Users.Include(u => u.UserDetails).FirstOrDefaultAsync(u => u.Email == email);
        }

        public async Task<User> GetUser(string username) //GetUser by username
        {
           return await db.Users.Include(u => u.UserDetails).Where(u => u.UserName == username).FirstOrDefaultAsync();
        }

        public async Task<User> GetByIdAsync(int id) //GetUser by id
        {
            return await db.Users.Where(u => u.Id == id).FirstOrDefaultAsync();
        }

        public async Task AddAsync(User user)
        {
            if(user != null)
            await db.Users.AddAsync(user);
        }

        public void UpdateAsync(User user)
        {
            var trackedEntity = db.Users.Local.FirstOrDefault(e => e.Id == user.Id);
            if (trackedEntity != null)
                db.Entry(trackedEntity).State = EntityState.Detached;

            db.Entry(user).State = EntityState.Modified;
        }

        public async Task DeleteAsync(int id)
        {
            User user = await db.Users.FindAsync(id);
        
            if(user != null)
            {
                db.Users.RemoveRange(user);
            }
        }
    }
}