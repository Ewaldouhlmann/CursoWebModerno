const factorial = (number) => {
    //This function get a factorial of a number
    let factorial = number
    for (let i = number - 1; i > 0; i -= 1) {
        factorial *= i;
    } return factorial

}

console.log(factorial(8))
