const buttons = document.querySelectorAll('.btn');
const calcDisplay = document.querySelector('.calc-display');


let displayValue;

// MATHEMATICAL FUNCTIONS
function operate(a, b, fn) {
  return fn(a, b);
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
function buttonHandler(e) {
  if (this.dataset.btntype === 'num') {
    const num = this.textContent;
    
    calcDisplay.textContent =  calcDisplay.textContent += num;
    displayValue = +calcDisplay.textContent;
  }
}

function equalHandler(e) {
  if (this.classList.contains('equal')) {

  }
}






buttons.forEach( button => {
  button.addEventListener('click', buttonHandler)
})