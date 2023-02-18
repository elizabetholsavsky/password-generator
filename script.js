// Get references to the #generate element (button)
var generateBtn = document.querySelector("#generate");

// Generate password function
function generatePassword() {
  
// Prompt password criteria; length 8-128
var lengthResponse = prompt("Choose a password length of 8-128 characters and type the digit(s) below.");

if (lengthResponse == 0) {
  window.alert ("Please enter a number 8-128.");
} else if (lengthResponse <8) {
  window.alert ("Length must be more than 7 characters (but less than 129 characters).");
} else if (lengthResponse > 128) {
  window.alert ("Length must be less than 129 characters (but more than 7 characters).");
} else if (lengthResponse > 7 && lengthResponse <129) {
  window.alert ("As you wish👑! Your password will have " + lengthResponse + " characters.") +
}

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

// console.log(randomSymbol());

//Create random function

// Validate input

// Generate and display password, SLICE password after lengthResponse


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
