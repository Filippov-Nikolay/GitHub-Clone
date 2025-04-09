using System.Threading.Tasks;
using CloneGitHub.DAL.EF;
using CloneGitHub.DAL.Entities;
using CloneGitHub.DAL.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace CloneGitHub.DAL.Repositories
{
    public class UserRepository: IRepository<User>
    {
        private CloneGitHubContext db;


        public UserRepository(CloneGitHubContext _db)
        {
            db = _db;
        }

        public async Task<ICollection<User>> GetAllUsers()
        {
            return await db.Users.ToListAsync();
        }
    
    public async Task<User> GetUser(string username)
    {
       return await db.Users.Where(u => u.UserName == username).FirstOrDefaultAsync();
    }

       public async Task<User> GetUser(int id)
    {
       return await db.Users.Where(u => u.Id == id).FirstOrDefaultAsync();
     
    }

    public async Task<User> GetUserByEmail(string email)
    {
       return await db.Users.Where(u => u.Email == email).FirstOrDefaultAsync();
       
    }



    public void Update(User user)
    {
        db.Entry(user).State = EntityState.Modified;
    }

    public async Task Delete(int id)
    {
        User user = await db.Users.FindAsync(id);
        
        if(user != null)
        {
            db.Users.RemoveRange(user);
        }
        
    }

    
    }
}