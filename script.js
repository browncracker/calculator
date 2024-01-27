let firstNum = '';
let operator = null;
let secNum = '';
let currentNum = '';
let currentOperation = null;
let shouldResetScreen = false;


//set variable to store display value
let currentDisplay = document.querySelector('.currentNumber');
let previousDisplay = document.querySelector('.previousNumber');

//add event listener for number buttons
let numberBtns = document.querySelectorAll('.number');

numberBtns.forEach((numberBtn) =>
    numberBtn.addEventListener('click', () => handleNumber(numberBtn.textContent)));

//add event listener for operators
let operatorBtns = document.querySelectorAll('.operator');
operatorBtns.forEach((operatorBtn) =>
    operatorBtn.addEventListener('click', () => handleOperator(operatorBtn.textContent)));

//add event listener for equal sign
let equalBtn = document.querySelector('.equal');
equalBtn.addEventListener('click', () => evaluate());

//add event listener for clear button
let clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', () => clearCalc());

//function to handle number display
function handleNumber(num) {
    if(currentDisplay.textContent === '0' || shouldResetScreen) {
        resetScreen();
    }
        currentDisplay.textContent += num;
}

//function to handle operations and display
function handleOperator(operator) {
    if (currentOperation !== null) {
        evaluate();
    } 
    firstNum = currentDisplay.textContent;
    currentOperation = operator;
    previousDisplay.textContent = `${firstNum} ${currentOperation}`;
    shouldResetScreen = true;
}

function evaluate() {
    if (currentOperation === null || shouldResetScreen) {
        return;
    }
    if (currentOperation === '/' && currentDisplay.textContent === '0') {
        alert('You can\'t divide by 0!');
        return;
    }
    secNum = currentDisplay.textContent;
    currentDisplay.textContent = roundResult(operate(firstNum, secNum, currentOperation));
    previousDisplay.textContent = `${firstNum} ${currentOperation} ${secNum} =`;
    currentOperation = null;
}

function resetScreen() {
    currentDisplay.textContent = '';
    shouldResetScreen = false;
}

function roundResult(num) {
    return Math.round((num * 1000) / 1000);
}

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
    a = Number(a);
    b = Number(b);
    switch(operator) {
        case '+':
            return addNums(a, b);
        case '-':
            return subNums(a, b);
        case '/':
            if (b === 0) return null;
            else return divNums(a, b);
        case 'x':
            return multNums(a, b);
        default:
            return null;
    }
}

function clearCalc() {
    firstNum = '';
    secNum = '';
    currentDisplay.textContent = '0';
    previousDisplay.textContent = '';
    currentOperation = null;
}