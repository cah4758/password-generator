// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialChar = ["!","#","$","%","&","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","^","{","|","}","~"];
var numChar = ["1","2","3","4","5","6","7","8","9","0"];
var upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upperCase = upCase.split();
var lowCase = "abcdefghijklmnopqrstuvwxyz"
var lowerCase = lowCase.split();

function generatePassword() {
  // ! WHEN prompted for the length of the password
  var length = prompt("Enter password length between 8 and 128.")
  // * THEN I choose a length of at least 8 characters and no more than 128 characters
  console.log(parseInt(length))
  console.log(typeof parseInt(length))
  if (length < 8 || length > 128) {
    alert("Password length must be at least 8 characters and a max of 128 characters.");
  }
  // ! WHEN asked for character types to include in the password
  // * THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  var yesCap = confirm("Include UPPER CASE letters?")
  var noCap = confirm("Include lower case letters?")
  var nums = confirm("Include numbers?")
  var symb = confirm("Include special characters?")
  // ! WHEN I answer each prompt
  // * THEN my input should be validated and at least one character type should be selected
  if (!yesCap && !noCap && !nums && !symb) {
    alert("Please restart and select charachters to include.");
  }
  // ! WHEN all prompts are answered
  // * THEN a password is generated that matches the selected criteria

  return "yay password"
};


// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  // ! WHEN the password is generated
  // * THEN the password is either displayed in an alert or written to the page
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);