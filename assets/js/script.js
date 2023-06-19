// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var special = '!@#$%^&*()_+{}[]|\\/,./?:"';
var finalCharacterPool = "";

function generatePassword() {
  var pwLengthInput = prompt(
    "What length do you prefer your password to be? Please choose between 8 and 128 characters."
  );

  var passwordLength = Number(pwLengthInput);

  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    return alert("wrong");
  }

  var isLowercase = confirm(
    "Do you want tyour pw to contain lowercase characters?"
  );
  console.log(isLUppercase);
  var isLUppercase = confirm(
    "Do you want your pw to contain uppercase characters"
  );

  console.log(isLUppercase);
  // var
  // ask the rest of q's

  console.log("before", finalCharacterPool);
  if (isLowercase === true) {
    finalCharacterPool = finalCharacterPool + lowercase;
  }
  if (uppercase === true) {
    finalCharacterPool = finalCharacterPool + uppercase;
  }

  console.log("after", finalCharacterPool);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
