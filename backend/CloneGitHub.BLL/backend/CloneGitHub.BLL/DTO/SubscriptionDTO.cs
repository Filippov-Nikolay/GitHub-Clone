using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CloneGitHub.BLL.DTO
{
    public class SubscriptionDTO
    {
        public int Id { get; set; }
        public int FollowerId { get; set; }
        public int FollowedId { get; set; }
    }
}