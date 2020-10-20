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
upperCase:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
lowerCase:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
}

console.log(passwordRequirements);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//ask user for password requirements
function generatePassword(){
  var passwordLength= parseInt(prompt("How long would you like your password to be from 8 to 128?"));
    //Make sure that the user doesn't go over 128 character
    while(passwordLength >= 128 || passwordLength <= 8){
      passwordLength= parseInt(prompt("How long would you like your password to be from 8 to 128?"));
    }
    console.log(passwordLength);
    //ask user if they like special characters,numbers,lowcase,and uppercase
    var booleanNum = userChoiceBoolean("Numbers");
    var booleanUpper = userChoiceBoolean("Uppercase Letters");
    var booleanLower = userChoiceBoolean("Lowercase Letters");
    var booleanChar = userChoiceBoolean("Special Characters");
    console.log(booleanNum);
    console.log(booleanUpper);
    console.log(booleanLower);
    console.log(booleanChar);

      
  }

//function assk user if they like num, uppercase , lowercase, char
function userChoiceBoolean(textHolder){
  var choice =  confirm("Would you like " + textHolder);
  return choice;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


