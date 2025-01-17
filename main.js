let display = document.getElementById("display");
let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let input = document.getElementById("input");
let reset = document.getElementById("reset");
let para = document.getElementById("para");

let inputValue;
let displayValue;

// reset button function
reset.addEventListener("click", () => {
  display.innerText = 0;
});

// minus button function
minus.addEventListener("click", () => {
  inputValue = input.value;
  if (inputValue == "") {
    para.style.visibility = "visible";
    return;
  } else {
    para.style.visibility = "hidden";
    inputValue = Number.parseInt(input.value);
    displayValue = Number.parseInt(display.innerText);
    displayValue = displayValue - inputValue;
    display.innerText = displayValue;
  }
});

// plus button function
plus.addEventListener("click", () => {
  inputValue = input.value;
  if (inputValue == "") {
    para.style.visibility = "visible";
    return;
  }
  para.style.visibility = "hidden";
  inputValue = Number.parseInt(input.value);
  displayValue = Number.parseInt(display.innerText);
  displayValue = displayValue + inputValue;
  display.innerText = displayValue;
});
