//BUTTONS
const numberButtons = document.querySelectorAll('.btn-num');
const operatorButtons = document.querySelectorAll('.btn-oper');

const equalBtn = document.querySelector('.btn-equal');
const clearBtn = document.querySelector('.btn-clear');

const calcDisplayElement = document.querySelector('.calc-display');

let displayValue;
let calculator = {
  currValue: 0,
  prevValue: undefined,
  operator: undefined,
  equalPressed: false
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

// HELPERS


// HANDLERS
function clear() {

  calculator.currValue = 0;
  calculator.prevValue = undefined;
  calculator.operator = undefined;

  calcDisplayElement.textContent = '0';
}

//Handles the number buttons on the calculator
function numberHandler(e) {

  if (calculator.equalPressed) {
    calculator.equalPressed = false;
    clear();
  }

  const numberValue = e.target.textContent;

  if (numberValue === '.' && calculator.currValue.includes('.')) return;

  calculator.currValue += numberValue;

  //remove leading 0 if it shows up
  if (calculator.currValue.length > 1 && calculator.currValue[0] === '0') {
    calculator.currValue = calculator.currValue.slice(1);
  }

  calcDisplayElement.textContent = calculator.currValue;
}

//Handles the operator buttons
function operatorHandler(e) {
  const clickedOperator = e.target.textContent;

  const opBtnsArr = Array.from(operatorButtons);
  const pressedExists = opBtnsArr.some(btn => btn.classList.contains('pressed'));

  calculator.equalPressed = false;

  if (pressedExists) {
    operatorButtons.forEach(btn => btn.classList.remove('pressed'));
    calculator.operator = clickedOperator;
  }

  if (calculator.operator === '/' && +calculator.currValue === 0) {
    alert('You cannot divide by zero');
    console.log(calculator);
    return;
  }


  if (e.target.classList.contains('pressed')) {
    return;
  }
  e.target.classList.add('pressed');

  //check if divide by zero

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


  //if no value for prevvalue, make the prevValue same as currValue
  if (!calculator.currValue) {
    calculator.currValue = calculator.prevValue;
  }

  const resolvedValue = operate(+calculator.prevValue, +calculator.currValue, calculator.operator);

  //check if divide by zero
  if (calculator.operator === '/' && +calculator.currValue === 0) {
    alert('You cannot divide by zero');
    return;
  }

  calculator.prevValue = resolvedValue;

  calcDisplayElement.textContent = resolvedValue;

  calculator.currValue = resolvedValue;
  calculator.prevValue = 0;
  calculator.operator = undefined;
  calculator.equalPressed = true;

  operatorButtons.forEach(btn => btn.classList.remove('pressed'));
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

in the operatorHandler:
if any button has the pressed class, only change the calculator.operator property

1. change nodelist to array to access array methods
2. Array.some() to see if one contains the class
3.  if true, allow the calculation,
4. else, just change the calculator.operator


*/