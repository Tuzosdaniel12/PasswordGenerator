# PasswordGenerator

## Table of Content
* [Task](#Task)
* [User Story](#User-Story)
* [Acceptance Criteria](#Acceptance-Criteria)
* [Process](#Process)
* [JavaScript Images](#JavaScript-Images)
* [Links](#Links)

## Links


## Task
* Created a password based on the criteria selected by the user
    * Length of Password
    * Numbers
    * Special characters as show bellow
        * [list of Password Special Characters from the OWASP Foundation](https://www.owasp.org/index.php/Password_special_characters).
    * Uppercase letters
    * Lowercase letters

## User-Story
```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance-Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```
## Process
* Started creating an object that contain four arrays for , uppercase, lower case, numbers and characters
* Continue with creating function to generatePassword
* inside of function generatePassword, I asked for all the acceptance criteria
    * [Acceptance Criteria](#Acceptance-Criteria)
* After asking each question I did make sure that length of the   had be eight or more, again aby password under 6 characters can be liable 
* Created a random variable to have a random order of the choices the users asked for 
* I a created a switch statement to send each array, store in the global object I created, so it can call a function to check if it was one of the users choice.
    * If not a choice it would return the password as it was . 
    * if it was choice it would store new character to password.
* To test the program I used various console logs to make sure code was working and to see where my logic was faulty
    * Example I move variables to functions so the password could reset when ever pressing button 

## JavaScript-Images
![JS](https://github.com/Tuzosdaniel12/PasswordGenerator/blob/main/Assets/images/js-01.png)
![JS](https://github.com/Tuzosdaniel12/PasswordGenerator/blob/main/Assets/images/js-02.png)
![JS](https://github.com/Tuzosdaniel12/PasswordGenerator/blob/main/Assets/images/js-03.png)

## Links
* Website
    * https://tuzosdaniel12.github.io/PasswordGenerator/
* Repo
    * https://github.com/Tuzosdaniel12/PasswordGenerator

