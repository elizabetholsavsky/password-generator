// Get references to the #generate element (button)
var generateBtn = document.querySelector("#generate");

// Generate password function
function generatePassword() {
  console.log("Console log text");
  
// Prompt password criteria; length 8-128
// Character types: lowercase, uppercase, numbers, special chars

// Validate input

// Generate and display password

// Display generated password
  return "Generated password text"
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // Displays password on page
  passwordText.value = password;

}

// Add event listener to generate button (button click)
generateBtn.addEventListener("click", writePassword);
