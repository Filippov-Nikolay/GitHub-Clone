using System;

namespace CloneGitHub.DAL.Entities
{
    public class Logger
    {
        public int Id { get; set; }
        public int UserId { get; set; }

        public virtual User User { get; set; }
    }
}
