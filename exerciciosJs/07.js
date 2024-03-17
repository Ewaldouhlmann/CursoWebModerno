const bhaskara = (a, b, c) => {
    // This function receives three numbers and calcule the bhaskara form
    let delta = (b ** 2 - (4 * a * c));
    if (delta < 0) {
        return 'Delta negativo';
    } else {
        let firstresult = (-b + Math.sqrt(delta)) / (2 * a);
        let secondresult = (-b - Math.sqrt(delta)) / (2 * a);
        console.log(delta)
        return [firstresult, secondresult];
    };
};

console.log(bhaskara(4, 2, -6));