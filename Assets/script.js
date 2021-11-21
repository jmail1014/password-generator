// Assignment Code
var generateBtn = document.querySelector("#generate");

// array for lowercase letters
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// array for uppercase letters
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// array for number characters
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// array for spacial characters
var specialCharacters = ['!', '#', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '{', '|', '}', '~'];
// empty array to hold user's chooses
var chosenCharacters = [];

var passwordCharacters;

// Return generated password
function generatePassword() {
  // user chooses how many characters for their password
  var passwordCharacters = parseInt(window.prompt ("How many characters would you like? Choose an amount between 8-128"));
    if (!passwordCharacters) {
    window.alert("Please enter the character amount.");
    return null;
  }
  if(passwordCharacters < 8 ) {
    window.alert("Password is too short");
    return null;
  }
  else if(passwordCharacters > 128) {
    window.alert("Password is too long");
    return null;
  }
  // user chooses lowercase, uppercase, numbers and random characters
  var lowercaseConfirm = window.confirm("Hit OK for lowercase letters.");
    if(lowercaseConfirm) {
      chosenCharacters = chosenCharacters.concat(lowercase);
    }
  var uppercaseConfirm = window.confirm("Hit OK for uppercase letters.");
    if (uppercaseConfirm) {
      chosenCharacters = chosenCharacters.concat(uppercase);
    }

  var numberConfirm = window.confirm("Hit OK for numbers.");
    if (numberConfirm) {
      chosenCharacters = chosenCharacters.concat(numbers);
    }

  var specialCharacterConfirm = window.confirm("Hit OK for special characters.");
    if (specialCharacterConfirm) {
      chosenCharacters = chosenCharacters.concat(specialCharacters);
    }
    
    randomCharacters(passwordCharacters);
};

// Generate password with loop of selected character type
function randomCharacters(length) {
  for (var i = 0; i < length; i++) {
    var indexCharacters = chosenCharacters[Math.floor(Math.random() * chosenCharacters.length)];
    console.log(indexCharacters);
  }
  
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
