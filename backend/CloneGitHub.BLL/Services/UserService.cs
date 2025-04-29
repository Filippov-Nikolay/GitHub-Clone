using CloneGitHub.BLL.DTO;
using CloneGitHub.DAL.Entities;
using CloneGitHub.DAL.Interfaces;
using CloneGitHub.BLL.Infrastructure;
using CloneGitHub.BLL.Interfaces;
using AutoMapper;
using Microsoft.EntityFrameworkCore;

// ��������� UserDetails
namespace CloneGitHub.BLL.Services {
    public class UserService :IUserService {
        private readonly IUnitOfWork Database;
        private readonly IMapper mapper;

        public UserService(IUnitOfWork database, IMapper _mapper) {
            Database = database;
            mapper = _mapper;
        }

        public async Task<UserDTO> CreateLocalUser(User user)
        {
            return mapper.Map<UserDTO>(user);
        }


        public async Task<User> InfoToInteraction(UserDTO userDTO)
        {
            return mapper.Map<User>(userDTO);
        }



        public async Task CreateUser(UserDTO userDTO) {
            var user = await InfoToInteraction(userDTO);
            await Database.Users.AddAsync(user);
            await Database.CompleteAsync();
            
        }

        public async Task UpdateUser(UserDTO userDTO){
            var user = await InfoToInteraction(userDTO);
            Database.Users.UpdateAsync(user);
            await Database.CompleteAsync();
        }

        public async Task DeleteUser(int id){
            await Database.Users.DeleteAsync(id);
            await Database.CompleteAsync();
        }

        public async Task<UserDTO> GetUser(int id)
        {
            var user = await Database.Users.GetByIdAsync(id);
            if(user != null) {
                UserDTO userDTO = await CreateLocalUser(user);
                return userDTO;
            }
            return null;
        }

        public async Task<UserDTO> GetUser(string username)
        {
            var user = await Database.Users.GetUser(username);
            if(user != null) {
                UserDTO userDTO = await CreateLocalUser(user);
                return userDTO;
            }
            return null;
        }

      
        public async Task<UserDTO> GetUserByEmail(string email)
        {
            var user = await Database.Users.GetUserByEmail(email);
            if(user != null){
                UserDTO userDTO = await CreateLocalUser(user);
                return userDTO;
            }
            return null;
        }

        public async Task<IEnumerable<UserDTO>> GetAllUsers()
        {
            // Проблема с автомаппером
            //var users = await Database.Users.GetAllAsync(); 
            //return mapper.Map<IEnumerable<UserDTO>>(users);

            var users = await Database.Users.GetAllAsync();
            return mapper.Map<IEnumerable<UserDTO>>(users);
        }
    }
}
