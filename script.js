// Assignment Code
var generateBtn = document.querySelector("#generate");

// global variables 
var strongPassword = "";
console.log(strongPassword.length)
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
console.log(passwordRequirements.numbers.length);


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
    var booleanChar = userChoiceBoolean("Special Characters");
    var booleanUpper = userChoiceBoolean("Uppercase Letters");
    var booleanLower = userChoiceBoolean("Lowercase Letters");

    //put the password together using while 
    for(var x = 0; x <= passwordLength; x++){
      var randomOrder = Math.floor(Math.random() * Object.keys(passwordRequirements).length);
      switch (randomOrder) {
        case 0://numbers
        strongPassword = checkUserChoices(passwordRequirements.numbers, booleanNum);
          break;
        case 1://char
        strongPassword = checkUserChoices(passwordRequirements.characters, booleanChar);
          break;
        case 2://upperCase
        strongPassword = checkUserChoices(passwordRequirements.upperCase, booleanUpper);
          break;
        case 3://lowerCase
        strongPassword = checkUserChoices(passwordRequirements.lowerCase, booleanLower);
          break;  
      }
    }

      
  }

//function ask user if they like num, uppercase , lowercase, char
function userChoiceBoolean(textHolder){
  var choice =  confirm("Would you like " + textHolder);
  return choice;
}

//function check if they picked num , low, upper , char
function checkUserChoices(array, bool){
  if (bool){
    var randOrder = Math.floor(Math.random() * array.length);//creates random number to pick random value with in array
    return strongPassword + array[randOrder]; //adds num,char, low or upper to strong password
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


