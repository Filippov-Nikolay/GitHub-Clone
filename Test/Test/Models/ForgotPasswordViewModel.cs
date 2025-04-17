using System.ComponentModel.DataAnnotations;

namespace Test.Models {
    public class ForgotPasswordViewModel {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}
