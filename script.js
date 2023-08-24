// Assignment Code
var generateBtn = document.querySelector("#generate");

//Made variables for each numbers, lowercase, uppercase, and special characters

var numericCharacterArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var lowercaseArr = [
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
var uppercaseArr = [
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
var specialCharacterArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

var userChoice = [];

//making prompts appear so when I click generate prompts asking for an amount of numbers, letters and special characters come up.

function generatePassword() {
  var usersCharsLength = prompt("Choose an amount of numbers from 8-128");

  if (usersCharsLength < 8 || usersCharsLength > 128) {
    alert("Must be between 8 and 128 characters");
    generatePassword();
  }

  var specialCharacter = confirm(
    "Would you like special characters in your password?"
  );
  var numericCharacter = confirm("Would you like numbers in your password?");

  var uppercase = confirm("Would you like uppercase numbers would you like?");

  var lowercase = confirm("Would you like lowercase would you like?");
  if (!specialCharacter && !numericCharacter && !uppercase && !lowercase) {
    alert("Please confirm atleast one of the special keys");
    generatePassword();
  }

  var userOptions = {
    length: usersCharsLength,
    willHaveSpecChars: specialCharacter,
    willHaveNumChars: numericCharacter,
    willHaveUppChars: uppercase,
    willHaveLowChars: lowercase,
  };

  if (userOptions.willHaveSpecChars) {
    userChoice = userChoice.concat(specialCharacterArr);
  }

  if (userOptions.willHaveNumChars) {
    userChoice = userChoice.concat(numericCharacterArr);
  }

  if (userOptions.willHaveUppChars) {
    userChoice = userChoice.concat(uppercaseArr);
  }

  if (userOptions.willHaveLowChars) {
    userChoice = userChoice.concat(lowercaseArr);
  }
  var result = [];

  for (var i = 0; i < usersCharsLength; i++) {
    var index = Math.floor(Math.random() * userChoice.length);
    result.push(userChoice[index]);
  }
  console.log(result);
  //eventually will use this array to combine all values

  console.log(userChoice);

  return result.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//look into parseInt and parseFloat for var password so the end result comes out as a number data type instead of a string
//
