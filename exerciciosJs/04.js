const intDivisor = (dividend, divisor) => {
    /* This function receives two numbers, and returns the int division and the rest of the division
    */
    const result = Math.floor(dividend / divisor);
    const rest = dividend - (divisor * result);
    return [result, rest];
}

console.log(intDivisor(70, 6));