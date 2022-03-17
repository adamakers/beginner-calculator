// ELEMENTS
const numberBtns = document.querySelectorAll('.btn-num');
const operatorBtns = document.querySelectorAll('.btn-oper');

// GLOBAL VARS

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

//handler for numbers
  //add number to display
  //put display number in var