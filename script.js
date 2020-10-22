// Assignment Code
var generateBtn = document.querySelector("#generate");

// global variables 
var maxLength = 128;
var minLength = 8;

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


// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
//ask user for password requirements
function generatePassword(){
  var strongPassword = "";//store password here then return it 
  var passwordLength= parseInt(prompt("How long would you like your password to be from " + minLength + " to " + maxLength + "?"));
    //Make sure that the user doesn't go over 128 character
    if(!(minLength <= passwordLength && passwordLength <= maxLength)){
      alert("Provide a correct length between " + minLength + " to " + maxLength + "?");
      return strongPassword;
    }

    //ask user if they like special characters,numbers,lowcase,and uppercase
    var booleanNum = userChoiceBoolean("Numbers");
    var booleanChar = userChoiceBoolean("Special Characters");
    var booleanUpper = userChoiceBoolean("Uppercase Letters");
    var booleanLower = userChoiceBoolean("Lowercase Letters");
    //console.log(boolNum)
    //console.log(boolChar)
    //console.log(boolUpper)
    //console.log(boolLower)
    

    //added this option ilearned from class activities, so I have one true at lease
    if (booleanNum === false && booleanChar === false && booleanUpper === false && booleanLower === false){
      alert("Must pick an option, you must start again");
      return strongPassword;
    }
    else{ 
      //put the password together while password is less then or equals to lenght of user choice 
      while(strongPassword.length < passwordLength){
        //random order of num,char,lower and upper case letters
        var randomOrder = Math.floor(Math.random() * Object.keys(passwordRequirements).length);
        switch (randomOrder) {
          case 0://numbers
          strongPassword = checkUserChoices(passwordRequirements.numbers, booleanNum, strongPassword);
            break;
          case 1://char
          strongPassword = checkUserChoices(passwordRequirements.characters, booleanChar, strongPassword);
            break;
          case 2://upperCase
          strongPassword = checkUserChoices(passwordRequirements.upperCase, booleanUpper,strongPassword);
            break;
          case 3://lowerCase
          strongPassword = checkUserChoices(passwordRequirements.lowerCase, booleanLower, strongPassword);
            break;  
        }
      }
        //console.log(strongPassword); for de bug
      return strongPassword;
  }
  }

//function ask user if they like num, uppercase , lowercase, char
function userChoiceBoolean(textHolder){
  var choice =  confirm("Would you like " + textHolder);
  return choice;
}

//function check if they picked num , low, upper , char
function checkUserChoices(array, bool, strongPassword ){
  if (bool){
    var randOrder = Math.floor(Math.random() * array.length);//creates random number to pick random value with in array
    console.log(strongPassword + array[randOrder]);//de bug
    return strongPassword + array[randOrder]; //adds num,char, low or upper to strong password
  }
 else{                          
   return strongPassword;
 }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


