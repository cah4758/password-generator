// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialChar = ["!","#","$","%","&","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","^","{","|","}","~"];
var numChar = ["1","2","3","4","5","6","7","8","9","0"];
var upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upperCase = upCase.split("");
var lowCase = "abcdefghijklmnopqrstuvwxyz"
var lowerCase = lowCase.split("");
// var passCharacters = [specialChar[i], numChar[i], upperCase[i], lowerCase[i]];

function generatePassword() {
  var length = prompt("Enter password length between 8 and 128.")
  console.log(parseInt(length))
  console.log(typeof parseInt(length))
  if (length < 8 || length > 128) {
    alert("Password length must be at least 8 characters and a max of 128 characters.");
    // Restart process if parameters not met
    writePassword();
  }
  // Gather additional criteria for password
  var yesCap = confirm("Include UPPER CASE letters?")
  var noCap = confirm("Include lower case letters?")
  var nums = confirm("Include numbers?")
  var symb = confirm("Include special characters?")
  
  // check for at least one character selection
  if (!yesCap && !noCap && !nums && !symb) {
    alert("Please restart and select charachters to include.");
    // Restart process if parameters not met
    writePassword();
  }

  // Object stores criteria
   var passCriteria = {
    passLeng: length,
    spChar: symb,
    caps: yesCap,
    lower: noCap,
    digits: nums
  }
  console.log(passCriteria.passLeng);
  console.log(passCriteria.spChar);
  console.log(passCriteria.caps);
  console.log(passCriteria.lower);
  console.log(passCriteria.digits);

var genPwd = [];

if (passCriteria.spChar){
  genPwd.concat(specialChar);
  console.log("yes special characters");
} 
if (passCriteria.caps){
  genPwd.concat(upperCase);
  console.log("yes caps");
} 
if (passCriteria.lower){
  genPwd.concat(lowerCase);
  console.log("yes nocaps");
}
if (passCriteria.digits){
  genPwd.concat(numChar);
  console.log("yes digits");
}
console.log(genPwd);






  // var i = Math.floor(Math.random() * passCriteria.passLeng);
  // console.log(i);
  // var n = 0
  // for (n = 0; n<= passCriteria.passLeng; n++) {
  //   genPwd[i].toString(n);
  // }
    
  
  



  return password
};


// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  // Password displayed in text area above generate button
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Button begins password generationgit 
generateBtn.addEventListener("click", writePassword);