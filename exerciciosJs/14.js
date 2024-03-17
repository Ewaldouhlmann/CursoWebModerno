const tipoFruta = (fruit) => {
    /*This function use a switch case to verify if a fruit is apple, kiwi and watermellon and returns a msg*/
    fruit = fruit.toLowerCase();
    switch (fruit) {
        case 'maçã':
            return 'Não vendemos esta fruta aqui!';
        case "kiwi":
            return 'Estamos com escassez de kiwis';

        case "melancia":
            return "Aqui está, são 3 reais o quilo";
        default:
            return 'Não existe esta fruta no estoque!'
    }
}

console.log(tipoFruta('MAÇÃ'))

