using CloneGitHub.DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CloneGitHub.BLL.DTO
{
    public class ActivityDTO
    {
        public int Id { get; set; }
        public int RepositoryId { get; set; }
        public DateTime ChangedDate { get; set; }

        public virtual Repository Repository { get; set; }
    }
}