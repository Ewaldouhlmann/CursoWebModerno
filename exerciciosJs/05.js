const formatedValue = (number) => {
    //This function receive a number and return it as a formated real value (R$**,**)
    let formatedNumber = number.toFixed(2).replace('.', ',');
    return 'R$' + formatedNumber;
}

console.log(formatedValue(0.30000000000000004))