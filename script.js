//BUTTONS
const numberButtons = document.querySelectorAll('.btn-num');
const operatorButtons = document.querySelectorAll('.btn-oper');

const calcDisplayElement = document.querySelector('.calc-display');

let displayValue;
let calculator = {
  currValue: '',
  prevValue: undefined,
  operator: undefined,
}

// MATHEMATICAL FUNCTIONS

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(a, b, symbol) {

  switch (symbol) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
  }
}

//HELPERS

// HANDLERS
function clearHandler() {
  displayValue = 0;
  calcDisplayElement.textContent = '';
  calculator.operator = undefined;
  calculator.prevValue = undefined;
}

//Handles the number buttons on the calculator
function numberHandler(e) {

  const target = e.target;
  const targetValue = target.textContent;

  calculator.currValue += targetValue;

  calcDisplayElement.textContent = calculator.currValue;
}

//Handles the operator buttons
function operatorHandler(e) {

}

//Handles the equal button
function equalHandler(e) {

}

// EVENT LISTENERS

numberButtons.forEach(btn => {
  btn.addEventListener('click', numberHandler);
});

operatorButtons.forEach(btn => {
  btn.addEventListener('click', operatorHandler);
});


/*
TODO:

1. if user inputs buttons after an equal, clear everything
  * set a flag after equal sign?

2. if user inputs operator twice throw a bug
3. Pressing = before entering all of the numbers or an operator could cause problems!
4. Display a snarky error message if the user tries to divide by 0… don’t let it crash your calculator!


*/