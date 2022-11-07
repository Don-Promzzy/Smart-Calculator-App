// The querySelector sections
const appButton = document.querySelector(".app-button button");
const appCalculator = document.querySelector(".app-calculator");

const toggleBtn = document.querySelector(".toggle-btn");
const toggleIcon = document.querySelector(".toggle-icon");

const displayContent = document.querySelector("#display");

const topOperatorBtn = document.querySelectorAll(".top_operator-btn");
const btnNumber = document.querySelectorAll(".btn_number");
const rightOperatorBtn = document.querySelectorAll(".right_operator-btn");

// Adding onclick function to App Button
appButton.onclick = () => {
  appCalculator.classList.add("activeCalculator");
};

// Using forEach method
const calculationStr = (buttons) => {
  buttons.forEach((item) => {
    item.onclick = () => {
      if (item.id == "clearAll") {
        displayContent.textContent = "";
      } else if (item.id == "backspace") {
        let string = displayContent.textContent.toString();
        displayContent.textContent = string.substr(0, string.length - 1);
      } else if (displayContent.textContent != "" && item.id == "equal") {
        displayContent.textContent = eval(displayContent.textContent);
      } else if (displayContent.textContent == "" && item.id == "equal") {
        displayContent.textContent = "";
        setTimeout(() => (displayContent.textContent = ""), 2000);
      } else {
        displayContent.textContent += item.id;
      }
    };
  });
};

calculationStr(topOperatorBtn);
calculationStr(rightOperatorBtn);
calculationStr(btnNumber);

// Adding toggle classList to toggle button
let isDarkMode = true;
toggleBtn.onclick = () => {
  appCalculator.classList.toggle("dark");
  toggleBtn.classList.toggle("active");
  isDarkMode = !isDarkMode;
};
