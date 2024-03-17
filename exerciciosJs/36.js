const multiplyVect = (vector, number) => {
    let multiplierVect = []
    for (let i = 0; i < vector.length; i++) {
        multiplierVect.push(vector[i] * number)
    } return multiplierVect;
}

const multiplyVectifnumBigthanfive = (vector, number) => {
    let multiplierVect = []
    for (let i = 0; i < vector.length; i++) {
        if (vector[i] > 5) {
            multiplierVect.push(vector[i] * number)
        }
        else {
            multiplierVect.push(vector[i])
        }

    } return multiplierVect;
}

console.log(multiplyVect([1, 2, 3, 4, 56, 7, 9, 9, 15], 5))
console.log(multiplyVectifnumBigthanfive([1, 2, 3, 4, 56, 7, 9, 9, 15], 5))
