// declaring the values we are going to use
const upperCaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseString = "abcdefghijklmnopqrstuvwxyz";
const numericString = "1234567890";
const specialCharString = `!"#$%&'(\`)*+,-./:;<=>?@[\\]^_{|}~`;

// changing the values to arrays
const upperCaseArray = upperCaseString.split("");
const lowerCaseArray = lowerCaseString.split("");

const numericArray = numericString.split("");
const specialCharArray = specialCharString.split("");

// setting up the button
let generateBtn = document.querySelector("#passwordGeneratorButton");

generateBtn.addEventListener('click', genCharArray);

let passwordArray = [];

function genCharArray() {
 
  passwordArray = [];
  if (document.getElementById("charType0").checked) {
    passwordArray = passwordArray.concat(upperCaseArray);
      }
  if (document.getElementById("charType1").checked) {
    passwordArray = passwordArray.concat(lowerCaseArray);
  }
  if (document.getElementById("charType2").checked) {
    passwordArray = passwordArray.concat(numericArray);
  }
  if (document.getElementById("charType3").checked) {
    passwordArray = passwordArray.concat(specialCharArray);
  }
  displayPasswordResults();
}

//  password length declared
function genPassLength() {
  passwordLength = document.getElementById("passLength").value;
  document.getElementById("lengthDisplay").innerHTML = " " + passwordLength;
}

// password length retrieved
let passwordLength = document.getElementById("passLength").value;


const passwordEl = document.getElementById("passwordDisplay");



function passwordGenerator() {
  let userPassword = [];
  // build password loop will execute here
  for (i = 0; i < passwordLength; i++) {

    let randomIndex = Math.floor(Math.random() * passwordArray.length);
    let passwordChar = passwordArray[randomIndex];

   userPassword.push(passwordChar);
  }
  return userPassword.join("");
}

// password will be displayed
function displayPasswordResults() {
  const password = passwordGenerator();

 if (passwordArray.length === 0) {
    passwordEl.classList.add('alert');
    passwordEl.innerHTML = "! no character set selected !";
    return;
  }
  // password will be printed
  passwordEl.classList.remove('alert');
  copyButton.classList.remove('hideButton');
  passwordEl.innerHTML = password;
}

function copyPassword() {
  passwordEl.select();
  document.execCommand("copy");
}
