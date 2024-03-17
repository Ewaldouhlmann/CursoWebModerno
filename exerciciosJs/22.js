const anuallityPrice = (month, anuallityvalue) => {
    /*This function receives the anuallity value of a acossiation and the month that the anuallity value
    annuality was paid, the annuallity should be paid in January, a compound interest of 5% will be added
    for each month late*/
    let finalPrice = anuallityvalue;
    if (month === 1) {
        const fixedValue = anuallityvalue.toFixed(2).replace('.', ',')
        return 'Valor a ser pago: R$' + (fixedValue)
    }
    for (let i = 1; i <= 12; i++) {
        console.log(finalPrice)
        if (month > i) {
            finalPrice *= (1.05);
        } else {

            break

        }
    }
    const fixedValue = finalPrice.toFixed(2).replace('.', ',')
    return 'Valor a ser pago: R$' + (fixedValue)
}

console.log(anuallityPrice(12, 100))