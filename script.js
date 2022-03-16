const buttons = document.querySelectorAll('.btn');
const calcDisplayElement = document.querySelector('.calc-display');


let displayValue;
let calculationHolder = {
  prevValue: undefined,
  operator: undefined,
  opPressed: false
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

// HANDLERS
function clearHandler() {
  displayValue = '';
  calcDisplayElement.textContent = '';
  calculationHolder.operator = undefined;
  calculationHolder.prevValue = undefined;
}

function numberHandler(e) {
  const target = e.target;

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

function operatorHandler(e) {
  const operSymbol = e.target.textContent;

  if (calculationHolder.operator) {
    displayValue = operate(calculationHolder.prevValue, displayValue, calculationHolder.operator);
    calcDisplayElement.textContent = displayValue;
  }

  calculationHolder.prevValue = +displayValue;
  calculationHolder.operator = operSymbol;
  calculationHolder.opPressed = true;
}

function equalHandler(e) {
  displayValue = operate(calculationHolder.prevValue, displayValue, calculationHolder.operator);
  calcDisplayElement.textContent = displayValue;
  calculationHolder.prevValue = displayValue;
  displayValue = '';
}

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

  console.log(`displayValue : ${displayValue}`);
  console.log(`calcHolder prevVal: ${calculationHolder.prevValue}`);
  console.log(`calcHolder oper: ${calculationHolder.operator}`);
}



buttons.forEach(button => {
  button.addEventListener('click', buttonHandler)
});


/*
TODO:

1. if user inputs buttons after an equal, clear everything
2. if user inputs operator twice throw a bug
3. 


*/