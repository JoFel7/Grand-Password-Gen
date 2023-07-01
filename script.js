// Assignment Code
var generateBtn = document.querySelector("#generate");
const lowerChar = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const upperChar = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const specialChar = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "{",
  "|",
  "}",
  "~",
];
const numberChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function generatePassword() {
  var passOptions = [];
  var passLength = prompt("Enter the length of the Password");

  console.log(passLength);

  if (!(passLength >= 8 && passLength <= 128)) {
    alert("Password must be between 8-128");
    return "";
  }
var passUpper = confirm("Do you want uppercase?");

if (passUpper) {
  passOptions = passOptions.concat(upperChar);
}
var passLower = confirm("Do you want lowercase?");

if (passLower) {
  passOptions = passOptions.concat(lowerChar);
}
var passSpecial = confirm("Do you want special characters?");

if (passSpecial) {
  passOptions = passOptions.concat(specialChar);
}
var passNumber = confirm("Do you want numbers?");

if (passNumber) {
  passOptions = passOptions.concat(numberChar);
}
if (passOptions.length === 0) {
  alert("Why are you here?");
  return "";
}

var password = "";

for (let index = 0; index < passLength; index++) {
  password = password + passOptions[Math.floor(Math.random() * passOptions.length)];
  
}

return password;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
