let firstNum;
let operator;
let secNum;

//set variables to store display value
let currentNumber = document.querySelector('.currentNumber').textContent;
let previousNumber = document.querySelector('.previousNumber').textContent;
let currentDisplay = document.querySelector('.currentNumber');

//add event listener for number buttons
let numberBtns = document.querySelectorAll('.number');
numberBtns.forEach((numberBtn) => {
    numberBtn.addEventListener('click', () => {
        previousNumber = currentNumber;
        currentNumber = numberBtn.textContent;
        currentDisplay.textContent = currentNumber;
    })
})

function addNums(a, b) {
    return a + b;
}

function subNums(a, b) {
    return a - b;
}

function multNums(a, b) {
    return a * b;
}

function divNums(a, b) {
    return a / b;
}

function operate(a, b, operator) {
    switch(operator) {
        case '+':
            addNums(a, b);
            break;
        case '-':
            subNums(a, b);
            break;
        case '/':
            divNums(a, b);
            break;
        case 'x':
            multNums(a, b);
            break;
        default:
            console.log('not an operator');
    }
}