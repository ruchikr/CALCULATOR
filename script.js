document.addEventListener('DOMContentLoaded', function() {
    const screen = document.getElementById('screen');
    const buttons = document.querySelectorAll('button');
    let screenValue = '';
    let operator = '';
    let num1 = '';
    let num2 = '';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.innerText;

            if (value === 'AC') {
                screenValue = '';
                num1 = '';
                num2 = '';
                operator = '';
                screen.value = screenValue;
            } else if (value === '=') {
                num2 = screenValue;
                screenValue = evaluate(num1, num2, operator);
                screen.value = screenValue;
                num1 = screenValue;
                num2 = '';
                operator = '';
            } else if (isOperator(value)) {
                operator = value;
                num1 = screenValue;
                screenValue = '';
                screen.value = screenValue;
            } else {
                screenValue += value;
                screen.value = screenValue;
            }
        });
    });

    function isOperator(value) {
        return value === '+' || value === '-' || value === '*' || value === '/';
    }

    function evaluate(num1, num2, operator) {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        switch (operator) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                return num1 / num2;
            default:
                return num2;
        }
    }
});
