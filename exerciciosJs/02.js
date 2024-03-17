const triangleType = (sideA, sideB, sideC) => {
    /*This function receives three values and verify if its a valid triangle: If itsn't then return a msg
    If it's a valid triangle, return the type of the triangle(equilátero, isósceles, escaleno)
    */
    let maxValue = Math.max(sideA, sideB, sideC);
    let minValue = Math.min(sideA, sideB, sideC);
    let midValue = sideA + sideB + sideC - maxValue - minValue;

    if (maxValue >= minValue + midValue) {
        return "Não é um triangulo";
    } else {
        if (sideA === sideB && sideB === sideC) {
            return 'Equilátero';
        } else if (sideA === sideB || sideB === sideC || sideA == sideC) {
            return 'Isósceles';
        } else {
            return 'Escaleno';
        }
    }


};

console.log(triangleType(9, 4, 4));