// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;

}


function generatePassword() {

  // prompt user for password length
  let userLength = prompt("Enter a password length between 8 and 128.");
  
  
  if (userLength < 8 || userLength > 128 || isNaN(userLength)) {
    alert("Please enter a valid selection for password length. Click Generate Password to try again.");
    pwString = "";
    return;
  };

  
  let userLowerCase = confirm("Would you like LOWER CASE letters in your password? Click OK for YES and Cancel for NO.");
  let userUpperCase = confirm("Would you like UPPER CASE letters in your password? Click OK for YES and Cancel for NO.");
  let userNumbers = confirm("Would you like NUMBERS in your password? Click OK for YES and Cancel for NO.");
  let userSymbols = confirm("Would you like SYMBOLS in your password? Click OK for YES and Cancel for NO.");

  
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numbers = "0123456789";
  let symbols = "!*$%&#@+?:;()^";
  let pwString = "";

  
  if (userLowerCase) {
    pwString = pwString + lowerCase;
  }

  if (userUpperCase) {
    pwString = pwString + upperCase;
  } 

  if (userNumbers) {
    pwString = pwString + numbers;
  }

  if (userSymbols) {
    pwString = pwString + symbols;
  }

  
  if (pwString === "") {
    alert("A password requires some characters. Click Generate Password to try again.");
    pwString = "";
    return;
  }

  
  
  let userPassword = "";
  for (let i = 0; i < userLength; i++) {
    userPassword += pwString.charAt(Math.floor(Math.random() * pwString.length));
  }

  
  return userPassword;
}


generateBtn.addEventListener("click", writePassword);
