const textInput = document.getElementById("text-input");
const result = document.getElementById("result");
const checkBtn = document.getElementById("check-btn");

checkBtn.addEventListener("click", () => {
    verifyPalindrome(textInput.value)
});

// triggered when the enter key is pressed
textInput.addEventListener("keydown", function (event) {
  // Check if the key pressed was 'Enter'
  if (event.key === "Enter") {
    verifyPalindrome(textInput.value)
  }
});

const  verifyPalindrome = (params) => {
  if (!params) {
    window.alert("Please input a value");
  } else if (palindrome(params) === true) {
    result.textContent = `${textInput.value} is a palindrome`;
    textInput.value = "";
  } else {
    result.textContent = `${textInput.value} is not a palindrome`;
    textInput.value = "";
  }
}

// Palindomer function
const palindrome = (str) => {
  let letters = [];
  let rword = "";

  // Remove special caracters and white spaces
  let word = str
    .match(/[a-zA-Z0-9]/g)
    .join("")
    .toLowerCase();
  // Put in stack
  for (let i = 0; i < word.length; i++) {
    letters.push(word[i]);
  }

  // Put stack in reverse order
  for (let i = 0; i < word.length; i++) {
    rword += letters.pop();
  }

  // Conditional test
  if (rword === word) {
    return true;
  }
  return false;
}

