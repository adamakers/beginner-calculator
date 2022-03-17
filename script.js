const buttons = document.querySelectorAll('.btn');
const calcDisplayElement = document.querySelector('.calc-display');


let displayValue;
let calculationHolder = {
  prevValue: undefined,
  operator: undefined,
  opPressed: false,
  equalValue: false,
}

// MATHEMATICAL FUNCTIONS
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

//HELPERS
function divideByZeroError() {
  // if ()
}

// HANDLERS
function clearHandler() {
  displayValue = 0;
  calcDisplayElement.textContent = '';
  calculationHolder.operator = undefined;
  calculationHolder.prevValue = undefined;
}

//Handles the number buttons on the calculator
function numberHandler(e) {
  const target = e.target;

  if (calculationHolder.finalValue) {
    clearHandler();
    calculationHolder.finalValue = false;
  }

  if (calculationHolder.opPressed) {
    calculationHolder.opPressed = false;
    displayValue = '';
    calcDisplayElement.textContent = displayValue;
  }

  if (target.textContent === '.' && displayValue.toString().includes('.')) return;

  const num = target.textContent;

  calcDisplayElement.textContent = calcDisplayElement.textContent += num;
  displayValue = +calcDisplayElement.textContent;
}

//Handles the operator buttons
function operatorHandler(e) {
  const operSymbol = e.target.textContent;



  if (calculationHolder.operator) {
    displayValue = operate(calculationHolder.prevValue, displayValue, calculationHolder.operator);
    calcDisplayElement.textContent = displayValue;
  }

  calculationHolder.prevValue = displayValue;
  calculationHolder.operator = operSymbol;
  calculationHolder.opPressed = true;
}

//Handles the equal button
function equalHandler(e) {
  displayValue = operate(calculationHolder.prevValue, displayValue, calculationHolder.operator);
  calculationHolder.prevValue = displayValue;
  calcDisplayElement.textContent = displayValue;
  displayValue = 0;
  calculationHolder.finalValue = true;
}

//The core button handler.  The event delegator
function buttonHandler(e) {
  if (this.dataset.btntype === 'equal') {
    equalHandler(e);
  } else if (this.dataset.btntype === 'num') {
    numberHandler(e);
  } else if (this.dataset.btntype === 'oper') {
    operatorHandler(e);
  } else if (this.dataset.btntype === 'clear') {
    clearHandler();
  }
}


// EVENT LISTENERS
buttons.forEach(button => {
  button.addEventListener('click', buttonHandler)
});


/*
TODO:

1. if user inputs buttons after an equal, clear everything
  * set a flag after equal sign?

2. if user inputs operator twice throw a bug
3. Pressing = before entering all of the numbers or an operator could cause problems!
4. Display a snarky error message if the user tries to divide by 0… don’t let it crash your calculator!


*/