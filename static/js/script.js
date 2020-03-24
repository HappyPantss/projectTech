const password = document.querySelector("#password");
const cPassword = document.querySelector("#confirmPassword");
const cPasswordLabel = document.querySelector("#cPasswordLabel");

function validatePassword(){
  if (password.value == cPassword.value) {
    cPassword.style.borderColor = 'green';
    confirmPassword.setCustomValidity('');
  } else {
    cPassword.style.borderColor = '';
    confirmPassword.setCustomValidity("Passwords don't match");
  }
}

password.onchange = validatePassword;
cPassword.onkeyup = validatePassword;

// function validatePassword(){
//   if (cPassword.value > 0) {
//     cPassword.style.backgroundColor = 'green';
//   } else {
//     cPassword.style.backgroundColor = '';
//   }
// }