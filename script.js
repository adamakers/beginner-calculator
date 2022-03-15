const buttons = document.querySelectorAll('.btn');
const calcDisplayElement = document.querySelector('.calc-display');


let displayValue;
let calculationHolder = {
  prevValue: undefined,
  operator: undefined
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

function numberHandler(e) {
  const target = e.target;

  if (target.textContent === '.' && displayValue.toString().includes('.')) return;
  const num = target.textContent;
  
  calcDisplayElement.textContent =  calcDisplayElement.textContent += num;
  displayValue = +calcDisplayElement.textContent;
}

function operatorHandler(e) {
  //put number into calcHolder
  calculationHolder.prevValue = displayValue;
  // put operator into calcHolder
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

  calcDisplayElement.textContent = '';
}


function equalHandler(e) {
  displayValue = operate(calculationHolder.prevValue, displayValue, calculationHolder.operator);
  calcDisplayElement.textContent = displayValue;
  console.log(displayValue);
}


  // put the operation clicked into calcHolder
  //clear display

// HANDLERS
function buttonHandler(e) {
  if (this.dataset.btntype === 'equal') {
    equalHandler(e);
  } else if (this.dataset.btntype === 'num') {
    numberHandler(e);
  } else if (this.dataset.btntype === 'oper') {
    operatorHandler(e);
  }

  
}







buttons.forEach( button => {
  button.addEventListener('click', buttonHandler)
})