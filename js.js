let display = document.getElementById("display");
let num1 = '';
let num2 = '';
let operator = null;
let input = '';

const addNumber = (num) => {
    if (display.innerHTML === "NaN") clean();
    if (!operator) {   
      display.innerHTML += num;
      num1 = display.innerHTML;
    } else {
      input += num;
      display.innerHTML = input;
      num2 = display.innerHTML;
    }
}

const add = () => {
    if (operator === "add" && !num2) {
        operator = "add";
    } else {
        equal();
        operator = "add";
    }
}

const minus = () => {
    if (operator === "minus" && !num2) {
        operator = "minus";
    } else {
        equal();
        operator = "minus";
    }
}

const divide = () => {
    if (operator === "divide" && !num2) {
        operator = "divide";
    } else {
        equal();
        operator = "divide";
    }
}

const multiply = () => {
    if (operator === "multiply" && !num2) {
        operator = "multiply";
    } else {
        equal();
        operator = "multiply";
    }
}

const equal = () => {
    if (operator == "add") {
        display.innerHTML = (parseInt(num1) + parseInt(num2)).toString();
        num1 = display.innerHTML;
        num2 = '';
        input = '';
    }
    if (operator == "minus") {
        display.innerHTML = (parseInt(num1) - parseInt(num2)).toString();
        num1 = display.innerHTML;
        num2 = '';
        input = '';
    }
    if (operator == "divide") {
        display.innerHTML = (parseInt(num1) / parseInt(num2)).toString();
        num1 = display.innerHTML;
        num2 = '';
        input = '';
    }
    if (operator == "multiply") {
        display.innerHTML = (parseInt(num1) * parseInt(num2)).toString();
        num1 = display.innerHTML;
        num2 = '';
        input = '';
    }
}

const clean = () => {
    display.innerHTML = "";
    operator = null;
    num1 = '';
    num2 = '';
    input = '';
}
