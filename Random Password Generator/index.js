const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "~!@#$%^&*()_+/";

// selectors
const passBox = document.querySelector("#pass-box");
const totalChar = document.querySelector("#total-char");
const upperInput = document.querySelector("#upper-case");
const lowerInput = document.querySelector("#lower-case");
const numberInput = document.querySelector("#numbers");
const symbolInput = document.querySelector("#symbols");

const getRandomData = (dataSet) => {
  return dataSet[Math.floor(Math.random() * dataSet.length)];
};

const generatePassword = (password = "") => {
  if (upperInput.checked) {
    password += getRandomData(upperSet);
  }
  if (lowerInput.checked) {
    password += getRandomData(lowerSet);
  }
  if (numberInput.checked) {
    password += getRandomData(numberSet);
  }
  if (symbolInput.checked) {
    password += getRandomData(symbolSet);
  }
  if (password.length <= totalChar.value) {
    return generatePassword(password);
  }

  const truncatePassword = (password, totalChar) => {
    if (password.length > totalChar) {
      let subPassword = password.substring(0, totalChar);
      return subPassword;
    } else {
      return password;
    }
  };

  passBox.innerText = truncatePassword(password, totalChar.value);
};

generatePassword();

document
  .querySelector("#btn")
  .addEventListener("click", () => generatePassword());
