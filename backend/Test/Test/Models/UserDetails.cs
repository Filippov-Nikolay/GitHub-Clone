﻿namespace Test.Models
{
    public class UserDetails
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string? Avatar { get; set; }
        public string Name { get; set; } = string.Empty;
        public string? Bio { get; set; }
        public string? Pronouns { get; set; }
        public string? Company { get; set; }
        public string? Location { get; set; }
        public bool CurrentLocationTime { get; set; } = false;
        public string? WebSite { get; set; }
        public string? LinkToSocial1 { get; set; }
        public string? LinkToSocial2 { get; set; }
        public string? LinkToSocial3 { get; set; }
        public string? LinkToSocial4 { get; set; }
    }
}
