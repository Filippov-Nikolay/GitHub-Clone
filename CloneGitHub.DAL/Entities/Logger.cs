using System;

namespace CloneGitHub.DAL.Entities
{
    public class Logger
    {
        public int Id { get; set; }
        public DateTime LastLogin { get; set; }
        public int UserId { get; set; }
        public virtual User User { get; set; }


        public Logger(){
            LastLogin = DateTime.Now;
        }
    }
}
