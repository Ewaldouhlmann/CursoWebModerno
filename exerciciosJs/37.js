const arithmeticprog = (n, a1, r) => {
    let arithmeticprogression = []
    let cout = 0;
    for (let i = a1; cout < n; i += r) {
        arithmeticprogression.push(i);
        cout++
    }
    return arithmeticprogression;
}

console.log(arithmeticprog(7, 3, 5))


const geometricprog = (n, a1, r) => {
    let geometricprogprogression = []
    let cout = 0;
    for (let i = a1; cout < n; i *= r) {
        geometricprogprogression.push(i);
        cout++
    }
    return geometricprogprogression;
}

console.log(arithmeticprog(7, 3, 5))
console.log(geometricprog(7, 3, 5))
