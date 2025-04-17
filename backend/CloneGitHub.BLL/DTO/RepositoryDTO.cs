using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace CloneGitHub.BLL.DTO
{
    public class RepositoryDTO
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        
        [Required(ErrorMessage = "Name must be specified")]
        public string Name { get; set; }
        public string Description { get; set; }
        public bool IsPrivate { get; set; } = false;
        public bool IsPinned { get; set; } = false;

    }
}