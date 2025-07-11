const lengthSlider = document.getElementById("length");
const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const specialCheckbox = document.getElementById("special");
const passwordOutput = document.getElementById("passwordOutput");
const passStrength = document.getElementById("pass_strength");
var errorMessage = "Please select at least one character type.";

const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const specialChars = "!@#$%^&*()_+{}[]<>=~";

function generatePassword() {
  let length = parseInt(lengthSlider.value);
  let includeUppercase = uppercaseCheckbox.checked;
  let includeLowercase = lowercaseCheckbox.checked;
  let includeNumbers = numbersCheckbox.checked;
  let includeSpecial = specialCheckbox.checked;

  let charSet = "";
  if (includeUppercase) charSet += upperChars;
  if (includeLowercase) charSet += lowerChars;
  if (includeNumbers) charSet += numberChars;
  if (includeSpecial) charSet += specialChars;
  if (length <= 3) {
    passStrength.innerHTML = "Very Weak";
    passStrength.style.backgroundColor = "#d93511";
    passStrength.style.color = "#fff";
  } else if (length <= 6) {
    passStrength.innerHTML = "Weak";
    passStrength.style.backgroundColor = "#ffb370";
    passStrength.style.color = "#000";
  } else if (length <= 8) {
    passStrength.innerHTML = "Good";
    passStrength.style.backgroundColor = "#ffddbf";
    passStrength.style.color = "#000";
  } else if (length <= 10) {
    passStrength.innerHTML = "Strong";
    passStrength.style.backgroundColor = "#d5f2a5";
    passStrength.style.color = "#000";
  } else {
    passStrength.innerHTML = "Very Strong";
    passStrength.style.backgroundColor = "#9ae437";
    passStrength.style.color = "#000";
  }

  if (charSet === "") {
    passwordOutput.style.color = "red";
    passwordOutput.style.fontSize = "12px";
    passwordOutput.value = errorMessage;
    setTimeout(() => {
      passwordOutput.value = "";
      passwordOutput.style.color = "";
      passwordOutput.style.fontSize = "";
    }, 1500);
    return;
  }

  let finalPassword = "";

  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * charSet.length);
    finalPassword += charSet[randomIndex];
  }

  passwordOutput.value = finalPassword;
}

// copy button event
function copyPassword() {
  var originalPassword = passwordOutput.value;

  navigator.clipboard.writeText(passwordOutput.value);
  passwordOutput.style.color = "green";
  passwordOutput.value = "Password copied!";
  setTimeout(() => {
    passwordOutput.style.color = "";
    passwordOutput.value = originalPassword;
  }, 1200);
}

