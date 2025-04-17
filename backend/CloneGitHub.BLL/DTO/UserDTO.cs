using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace CloneGitHub.BLL.DTO
{
    public class UserDTO
    {
        public int Id { get; set; }
        
        [Required(ErrorMessage = "Email must be specified")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Username must be specified")]
        public string UserName { get; set; }

        public UserDetailsDTO userDetailsDTO{ get; set; }


    }
}