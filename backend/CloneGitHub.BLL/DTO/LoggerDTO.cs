using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CloneGitHub.BLL.DTO
{
    public class LoggerDTO
    {
        public int Id { get; set; }
        public DateTime LastLogin { get; set; }
        public int UserId { get; set; }
        public string UserEmail { get; set; }

    }
}