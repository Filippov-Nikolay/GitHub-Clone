using System;
using System.Collections.Generic;

namespace CloneGitHub.DAL.Entities
{
    public class User
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string UserName { get; set; }

        public virtual ICollection<Repository> Repositories { get; set; } = new List<Repository>();
        public virtual ICollection<Logger> Loggers { get; set; } = new List<Logger>();
        public virtual ICollection<Subscription> Subscriptions { get; set; }
        public virtual UserDetails UserDetails { get; set; }
    }
}
