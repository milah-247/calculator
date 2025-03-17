// const buttonValues = [
//   "AC",
//   "0",
//   "1",
//   "2",
//   "3",
//   "4",
//   "5",
//   "7",
//   "8",
//   "9",
//   "Del",
//   "clear",
//   "+-",
//   "%",
//   "*",
//   "+",
//   "-",
//   ".",
//   "=",
// ];
// const rightSymbol = ["+", "-", "/", "*"];
// const topSymbols = ["AC", "%", "+/-"];

// for (let i = 0; i < buttonValues.length; i++) {
//   let value = buttonValues[i];
//   let button = document.creatElement("button");
//   button.innertext = value;
// }
// add document to calculator
//  calculator program
// document.getElementById("buttons").appendChild(button);

const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}
function clearDisplay() {
  display.value = "";
}
function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "error";
  }
}
