function generatePassword() {
  
// Prompt password criteria; length 8-128
var lengthResponse = parseInt(prompt("Choose a password length of 8-128 characters and type the digit(s) below."));

if (lengthResponse == 0 || isNaN(lengthResponse)) {
  alert ("Please enter a number 8-128.");
  return;

} else if (lengthResponse < 8) {
  alert ("Length must be more than 7 characters (but less than 129 characters).");
  return;

} else if (lengthResponse > 128) {
  alert ("Length must be less than 129 characters (but more than 7 characters).");
  return;

} else if (lengthResponse > 7 && lengthResponse <129) {
  alert ("As you wish👑! Your password will have " + lengthResponse + " characters.")
}

// Character type functions: lowercase, uppercase, numbers, special chars

function randomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function randomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

//random character logic
var charTypes = [upperResponse, lowerResponse, numberResponse, symbolResponse]

function randomSymbol() {
  const symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

var lowerResponse = confirm('Click "okay" to include lowercase letters.')
if (lowerResponse === true) {
  alert ("Your password will contain lowercase letters.");
} else {
alert ("Your password will NOT contain lowercase letters.");
}

var upperResponse = confirm('Click "okay" to include uppercase letters.')
if (upperResponse === true) {
  alert ("Your password will contain uppercase letters.");
} else {
alert ("Your password will NOT contain uppercase letters.");
}

var numberResponse = confirm('Click "okay" to include numbers.')
if (numberResponse === true) {
  alert ("Your password will contain numbers.");
} else {
alert ("Your password will NOT contain numbers.");
}

var symbolResponse = confirm('Click "okay" to include special characters.')
if (symbolResponse === true) {
  alert ("Your password will contain special characters.");
} else {
alert ("Your password will NOT contain special characters.");
}

if (lowerResponse, upperResponse, numberResponse, symbolResponse === false) {
  alert ("Please choose at least one character type. Try again.");
  return;
}

//Create random function

// Generate and display password, SLICE password after lengthResponse

// Display generated password
  return ""
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
