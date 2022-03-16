const buttons = document.querySelectorAll('.btn');
const calcDisplayElement = document.querySelector('.calc-display');


let displayValue;
let calculationHolder = {
  prevValue: undefined,
  operator: undefined,
  opPressed: false
}

// MATHEMATICAL FUNCTIONS
function operate(a, b, fn) {
  return fn(a,b);
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
  //clear the display
  calcDisplayElement.textContent = '';
  //clear the prevVal
  calculationHolder.operator = undefined;
  //clear the prevOps
  calculationHolder.prevValue = undefined; 
}

function numberHandler(e) {
  const target = e.target;

  if (calculationHolder.opPressed) {
    //clear the display
    calculationHolder.opPressed = false;
    displayValue = '';
    calcDisplayElement.textContent = displayValue;
  }

  if (target.textContent === '.' && displayValue.toString().includes('.')) return;
  const num = target.textContent;
  
  calcDisplayElement.textContent =  calcDisplayElement.textContent += num;
  displayValue = +calcDisplayElement.textContent;
}

function operatorHandler(e) {
  if (calculationHolder.prevValue) {
    equalHandler(e);
  }

  calculationHolder.prevValue = displayValue;
  
  switch (e.target.textContent) {
    case '+':
      calculationHolder.operator = add;
      break;
    case '-':
      calculationHolder.operator = subtract;
      break;
    case '*':
      calculationHolder.operator = multiply;
      break;
    case '/':
      calculationHolder.operator = divide;
      break;
  }

  // put a flag, if operator pressed, next number button, clears the numbers
  displayValue = '';
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
  }

  console.log(`displayValue : ${displayValue}`);
  console.log(`calcHolder prevVal: ${calculationHolder.prevValue}`);

}







buttons.forEach( button => {
  button.addEventListener('click', buttonHandler)
})