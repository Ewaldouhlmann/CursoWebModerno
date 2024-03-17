const quantitypairnimpars = (array) => {
    let quantitypair = 0;
    let quantityimpar = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            quantitypair++;
        } else if (array[i] != 0) {
            quantityimpar++;
        }
    } return quantitypair;
}


console.log(quantitypairnimpars([1, 2, 3, 4, 5,291,,,9,981,15]))