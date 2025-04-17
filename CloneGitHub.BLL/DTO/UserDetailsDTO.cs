using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace CloneGitHub.BLL.DTO
{
    public class UserDetailsDTO
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        
        [Required(ErrorMessage = "Name must be specified")]
        public string Name { get; set; }
        public string Bio { get; set; }
        public string Pronouns { get; set; }
        public string Company { get; set; }
        public string Location { get; set; }
        public bool CurrentLocationTime { get; set; } = false;
        public string WebSite { get; set; }
        public string LinkToSocial1 { get; set; }
        public string LinkToSocial2 { get; set; }
        public string LinkToSocial3 { get; set; }
        public string LinkToSocial4 { get; set; }
    }
}