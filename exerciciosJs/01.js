const simpleCalculator = (firstNum, secondNum) => {
    //This function is a simple calculator which receives two numbers and returns the sum, subtract, multiply and divide
    const sum = firstNum + secondNum;
    const sub = firstNum - secondNum;
    const mux = firstNum * secondNum
    const div = firstNum / secondNum;
    console.log(`Soma: ${sum}, Subtração: ${sub}, Multiplicação: ${mux}, Divisão: ${div}`);
    return [sum,sub,mux,div]
};
simpleCalculator(5, 3);