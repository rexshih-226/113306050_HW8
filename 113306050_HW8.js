function calculate(event) {
    event.preventDefault();

    const num1 = parseFloat(document.getElementById('number1').value);
    const operator = document.getElementById('operator').value;
    const num2 = parseFloat(document.getElementById('number2').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.textContent = 'Please enter valid numbers!';
        return;
    }

    let result;
    switch (operator) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            if (num2 === 0) {
                resultDiv.textContent = 'Wrong! You can\'t divide zero.';
                return;
            }
            result = divide(num1, num2);
            break;
        default:
            resultDiv.textContent = 'Invalid';
            return;
    }

    resultDiv.textContent = `Result：${result.toFixed(2)}`;
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