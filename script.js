const buttons = document.querySelectorAll('.btn');



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
  if (this.classList.contains('num')) {
    console.log(this.textContent);
  }
}






buttons.forEach( button => {
  button.addEventListener('click', buttonHandler)
})