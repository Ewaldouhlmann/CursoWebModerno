const getPrice = (code, quantity) => {
    /*This function receives a code and a quantity of items and returns the final price*/
    let price = 0;
    switch (code) {
        case "100":
            price = (3 * quantity).toFixed(2).replace(".", ",");
            return "Cachorro quente R$" + (price)
        case "200":
            price = (4 * quantity).toFixed(2).replace(".", ",");
            return "Hamburguer Simples R$" + (price);
        case "300":
            price = (5.5 * quantity).toFixed(2).replace(".", ",");
            return "Cheeseburguer Simples R$" + (price);
        case "400":
            price = (7.5 * quantity).toFixed(2).replace(".", ",");
            return "Bauru R$" + (price);
        case "500":
            price = (3.5 * quantity).toFixed(2).replace(".", ",");
            return "Refrigerante R$" + (price);
        case "600":
            price = (2.8 * quantity).toFixed(2).replace(".", ",");
            return "Suco R$" + (price);
        default:
            return "Código inválido!";
    }
}

console.log(getPrice('200', 3));
console.log(getPrice("300", 3));
console.log(getPrice("500", 3));

console.log(getPrice("700", 3));