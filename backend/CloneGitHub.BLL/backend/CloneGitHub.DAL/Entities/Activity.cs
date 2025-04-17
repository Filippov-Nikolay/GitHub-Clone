using System;

namespace CloneGitHub.DAL.Entities
{
    public class Activity
    {
        public int Id { get; set; }
        public int RepositoryId { get; set; }
        public DateTime ChangedDate { get; set; }

        public virtual Repository Repository { get; set; }
    }
}
