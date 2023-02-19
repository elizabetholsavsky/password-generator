function generatePassword() {

  // LENGTH 8-128 characters
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
  
  // Random character types: lowercase, uppercase, numbers, special chars
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
  
  let function_set = []


  // CHARACTER prompts
  var lowerResponse = confirm('Click "OK" to include lowercase letters.')
  if (lowerResponse === true) {
    function_set.push(randomLower)
    alert ("Your password will contain lowercase letters.");
  } else {
    alert ("Your password will NOT contain lowercase letters.");
  }
  
  var upperResponse = confirm('Click "OK" to include uppercase letters.')
  if (upperResponse === true) {
    function_set.push(randomUpper)
    alert ("Your password will contain uppercase letters.");
  } else {
    alert ("Your password will NOT contain uppercase letters.");
  }

  var numberResponse = confirm('Click "OK" to include numbers.')
  if (numberResponse === true) {
    function_set.push(randomNumber)
    alert ("Your password will contain numbers.");
  } else {
    alert ("Your password will NOT contain numbers.");
  }
  
  var symbolResponse = confirm('Click "OK" to include special characters.')
  if (symbolResponse === true) {
    function_set.push(randomSymbol)
    alert ("Your password will contain special characters.");
  } else {
    alert ("Your password will NOT contain special characters.");
  }
  
  if (!lowerResponse && !upperResponse && !numberResponse && !symbolResponse) {
    alert ("Please choose at least one character type. Try again.");
    generatePassword ()
  }
 
  // Password
  let password = ""
  for (let i=0; i<lengthResponse; i++){
    let randomIndex=Math.floor(Math.random()*function_set.length)
  password = password + function_set[randomIndex]()
  }

  return password;

}

// *********** STARTER CODE ************

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