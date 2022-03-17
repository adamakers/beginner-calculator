//BUTTONS
const numberButtons = document.querySelectorAll('.btn-num');
const operatorButtons = document.querySelectorAll('.btn-oper');

const equalBtn = document.querySelector('.btn-equal');
const clearBtn = document.querySelector('.btn-clear');

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

// HANDLERS
function clear() {
  calculator.currValue = '';
  calculator.prevValue = undefined;
  calculator.operator = undefined;

  calcDisplayElement.textContent = '0';
}

//Handles the number buttons on the calculator
function numberHandler(e) {
  const numberValue = e.target.textContent;

  calculator.currValue += numberValue;

  calcDisplayElement.textContent = calculator.currValue;
}

//Handles the operator buttons
function operatorHandler(e) {
  const clickedOperator = e.target.textContent;

  if (calculator.prevValue) {
    const resolvedValue = operate(+calculator.prevValue, +calculator.currValue, calculator.operator);

    calculator.prevValue = resolvedValue;
    calcDisplayElement.textContent = resolvedValue;
  } else {
    calculator.prevValue = calculator.currValue;
  }

  calculator.currValue = '';
  calculator.operator = clickedOperator;
}

//Handles the equal button
function equal() {
  const resolvedValue = operate(+calculator.prevValue, +calculator.currValue, calculator.operator);

  calculator.prevValue = resolvedValue.toString();

  calcDisplayElement.textContent = resolvedValue;

  calculator.currValue = resolvedValue;
  calculator.prevValue = '';
  calculator.operator = undefined;
}

// EVENT LISTENERS

numberButtons.forEach(btn => {
  btn.addEventListener('click', numberHandler);
});

operatorButtons.forEach(btn => {
  btn.addEventListener('click', operatorHandler);
});

equalBtn.addEventListener('click', equal);

clearBtn.addEventListener('click', clear);


/*
TODO:

1. decimals

2. if user inputs buttons after an equal, clear everything
  * set a flag after equal sign?

3. if user inputs operator twice throw a bug
4. Pressing = before entering all of the numbers or an operator could cause problems!
5. Display a snarky error message if the user tries to divide by 0… don’t let it crash your calculator!
6. make it so user cant hit 0 and get 0000000 on display

*/