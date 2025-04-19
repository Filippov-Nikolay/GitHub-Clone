using System.ComponentModel.DataAnnotations;

namespace CloneGitHub.Models {
    public class ResetPasswordViewModel {
        [Required]
        [EmailAddress]
        public string Email { get; set; }


        [Required]
        [DataType(DataType.Password)]
        public string NewPassword { get; set; }


        [DataType(DataType.Password)]
        [Display(Name = "Confirm password")]
        [Compare("NewPassword", ErrorMessage = "Пароли не совпадают")]
        public string ConfirmPassword { get; set; }


        // Код подтверждения, полученный по электронной почте
        public string Code { get; set; }
    }
}
