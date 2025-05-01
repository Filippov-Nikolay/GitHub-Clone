using System.Security.Cryptography;
using System.Text;

namespace CloneGitHub.Models {
    public static class PasswordHasher {
        public static string GenerateSalt() {
            var buffer = new byte[16];
            using var rng = RandomNumberGenerator.Create();
            rng.GetBytes(buffer);
            return Convert.ToBase64String(buffer);
        }

        public static string HashPassword(string password, string salt) {
            using var sha256 = SHA256.Create();
            var combined = Encoding.UTF8.GetBytes(password + salt);
            var hash = sha256.ComputeHash(combined);
            return Convert.ToBase64String(hash);
        }

        public static bool VerifyPassword(string inputPassword, string storedHash, string storedSalt) {
            var hash = HashPassword(inputPassword, storedSalt);
            return hash == storedHash;
        }
    }
}
