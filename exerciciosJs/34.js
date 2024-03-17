const strwSameLetters = (stra, strb) => {
    const upperstra = stra.toUpperCase()
    const upperstrb = strb.toUpperCase()


    for (let i = 0; i < upperstra.length; i++) {
        if (upperstrb.indexOf(upperstra[i]) === -1) {
            return false
        }
    }

    for (let i = 0; i < upperstrb.length; i++) {
        if (upperstra.indexOf(upperstrb[i]) === -1) {
            return false;
        }
    } return true;
}

console.log(strwSameLetters("casar", "sacaaar"));
console.log(strwSameLetters("casa", "carro"));