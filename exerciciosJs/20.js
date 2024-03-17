const getTroco = (valor) => {
    // This function receives a value and returns the change by notes(quantity -> value)
    const arrayNotas = [100, 50, 20, 10, 5, 1];
    let troco = valor;
    const qtNotas = {};

    for (let i = 0; i < arrayNotas.length; i++) {
        console.log(i)
        if (troco === 0) {
            break;
        } else {
            if (troco >= arrayNotas[i]) {
                qtNotas[arrayNotas[i]] = Math.floor(troco / arrayNotas[i]);
                troco %= arrayNotas[i];
            }
        }
    }

    // Traversing the qtNotas obj to print result
    for (const nota in qtNotas) {
        console.log(`Nota de ${nota}: ${qtNotas[nota]}`);
    }
}

getTroco(1870);
