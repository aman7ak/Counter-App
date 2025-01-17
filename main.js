let display = document.getElementById("display");
let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let input = document.getElementById("input");
let reset = document.getElementById("reset");

let inputValue;
let displayValue;

// reset button function
reset.addEventListener("click", () => {
  display.innerText = 0;
});

// minus button function
minus.addEventListener("click", () => {
  inputValue = Number.parseInt(input.value);
  displayValue = Number.parseInt(display.innerText);
  displayValue = displayValue - inputValue;
  display.innerText = displayValue;
});

// plus button function
plus.addEventListener("click", () => {
  inputValue = Number.parseInt(input.value);
  displayValue = Number.parseInt(display.innerText);
  displayValue = displayValue + inputValue;
  console.log(displayValue);
  display.innerText = displayValue;
});
