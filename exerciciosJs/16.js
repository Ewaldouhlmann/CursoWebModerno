const calculatorwCase = (a, sinal, b) => {
    /*This function is a simple calculator that receives two numbers and a signal(+,-,*,/) and returns the result*/
    switch (sinal) {
        case "+":
            return (a + b);
        case "-":
            return (a - b);
        case "*":
            return (a * b);
        case "/":
            return (a / b);
        default:
            return "Operação invalida!"
    }
}

console.log(calculatorwCase(1, '/', 2))