using System;
using System.Collections.Generic;

namespace CloneGitHub.DAL.Entities
{
    public class Repository
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool IsPrivate { get; set; } = false;
        public bool IsPinned { get; set; } = false;

        public virtual User User { get; set; }
        public virtual ICollection<Activity> Activities { get; set; } = new List<Activity>();
    }
}
