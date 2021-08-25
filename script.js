// Assignment Code
var generateBtn = document.querySelector("#generate");
// Character arrays for selection later
var specialChar = ["!","#","$","%","&","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","^","{","|","}","~"];
var numChar = ["1","2","3","4","5","6","7","8","9","0"];
var upCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


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

  //empty array to concatenate requested characters
  var genPwd = [];
  //completed password
  var finalPwd = [];
  //at least one of requested characters
  var ranPwd = [];

  // genPwd array concatenates entirety of true arrays
  // ranPwd.push adds random character of specific array to at least have what was requested
  if (passCriteria.spChar){
    genPwd = genPwd.concat(specialChar);
    console.log("yes special characters");
    ranPwd.push(generateRandom(specialChar));
  } 
  if (passCriteria.caps){
    genPwd = genPwd.concat(upCase);
    console.log("yes caps");
    ranPwd.push(generateRandom(upCase));
  } 
  if (passCriteria.lower){
    genPwd = genPwd.concat(lowCase);
    console.log("yes nocaps");
    ranPwd.push(generateRandom(lowCase));
  }
  if (passCriteria.digits){
    genPwd = genPwd.concat(numChar);
    console.log("yes digits");
    ranPwd.push(generateRandom(numChar));
  }
  // Logging out the now-filled-in arrays
  console.log(genPwd);
  console.log(ranPwd);

  // Chooses and pushes random items of genPwd array into finalPwd
  for (let n = 0; n<= passCriteria.passLeng; n++) {
      finalPwd.push(generateRandom(genPwd));
    }
  console.log(finalPwd);

  // finalPwd.join("") brings together as a string
  console.log(finalPwd.join(""));

  // Switches out first items of finalPwd with ranPwd to ensure we have all requested characters
  for (let index = 0; index < ranPwd.length; index++) {
    finalPwd[index] = ranPwd[index];
  }
  console.log(finalPwd.join(""));

  // arr inside for more responsiveness - able to use different arrays
  function generateRandom(arr) {
    var randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }


    return finalPwd.join("");
};


// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  // Password displayed in text area above generate button
  var passwordText = document.querySelector("#password");

  passwordText.textContent = password;

}
// Button begins password generationgit 
generateBtn.addEventListener("click", writePassword);