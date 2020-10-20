// Assignment Code
var generateBtn = document.querySelector("#generate");

// global variables 
var strongPassword;
// object that i can store every requirement array
var passwordRequirements = {
numbers: ["1","2","3","4","5","6","7","8","9"],
characters:["!","#","$","&","(",
            "\'\'","\"\"","%",")","*",
            "+",",","-",".",":",
            ";","<","=",">","?",
            "@","[","","]","^",
            "_","`","{","|","}",
            "~", "\/"],
upperCase:[],
lowerCase:[]
}

console.log(passwordRequirements);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
