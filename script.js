//BUTTONS
const numberButtons = document.querySelectorAll('.btn-num');
const operatorButtons = document.querySelectorAll('.btn-oper');

const equalBtn = document.querySelector('.btn-equal');

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
  calculator.prevValue = undefined;
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
  console.log('operator');
  console.log(calculator);

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

  calculator.prevValue = resolvedValue;
  calculator.currValue = '';
  console.log('equals');
  console.log(calculator);

}

// EVENT LISTENERS

numberButtons.forEach(btn => {
  btn.addEventListener('click', numberHandler);
});

operatorButtons.forEach(btn => {
  btn.addEventListener('click', operatorHandler);
});

equalBtn.addEventListener('click', equal);


/*
TODO:

1. if user inputs buttons after an equal, clear everything
  * set a flag after equal sign?

2. if user inputs operator twice throw a bug
3. Pressing = before entering all of the numbers or an operator could cause problems!
4. Display a snarky error message if the user tries to divide by 0… don’t let it crash your calculator!
5. make it so user cant hit 0 and get 0000000 on display

*/