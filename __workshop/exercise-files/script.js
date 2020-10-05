const form = document.querySelector("form");
let errorMessage = document.getElementById("error-message");
let errorSection = document.getElementById("error-section");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm-password");

form.addEventListener("submit", validations);

function clearErrors() {
  errorSection.style.display = "none";
  password.style.border = "none";
  password.style.boxShadow = "none";
  confirmPassword.style.border = "none";
  confirmPassword.style.boxShadow = "none";
}

function validations(event) {
  // prevent the browser from loading a new page, as it would do by default
  event.preventDefault();
  // clear the previous errors, if any exist
  clearErrors();
  // if the password is less than ten characters
  if (password.value.length < 10) {
    // display the error section
    errorSection.style.display = "flex";
    // assign the empty span the error message
    errorMessage.innerText =
      "Your password is too short! Please provide a password that is at least 10 characters long.";
    // give the password input focus
    password.focus();
    // give the password input a thicker, red border
    password.style.border = "4px solid hsl(333deg, 100%, 44%)";
    // give the password input a blue shadow
    password.style.boxShadow = "0 0 3pt 2pt blue";
    // can't seem to get the blue focus border to stack on top of the red border
  } else if (password.value !== confirmPassword.value) {
    // display the error section
    errorSection.style.display = "flex";
    // assign the empty span the error message
    errorMessage.innerText = "The password confirmation does not match.";
    // give the confirm password input focus
    confirmPassword.focus();
    // give the confirm password input a thicker, red border
    confirmPassword.style.border = "4px solid hsl(333deg, 100%, 44%)";
    // give the confirm password input a blue shadow
    confirmPassword.style.boxShadow = "0 0 3pt 2pt blue";
  } else {
    window.alert("Success!");
  }
}
