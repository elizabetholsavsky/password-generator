// Get references to the #generate element (button)
var generateBtn = document.querySelector("#generate");

// Generate password function
function generatePassword() {
  
// Prompt password criteria; length 8-128
// Character types: lowercase, uppercase, numbers, special chars

function randomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function randomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function randomSymbol() {
  const symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(randomSymbol());

//Create random function

// Validate input

// Generate and display password

// Display generated password
  return ""
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
