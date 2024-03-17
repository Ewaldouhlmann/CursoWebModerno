const recordBreaker = (pointsStr) => {
    /*This function receives a str with points per match separeted by ' ' and it returns an array that contains
    how many times the maximum of points are breaked and the match with minimum points
    */
    const pointsArray = pointsStr.split(' ').map(Number);
    let minimumpoints = pointsArray[0];
    let maxpoints = pointsArray[0];
    let quantityrecordbreakes = 0;
    let matchwithminpoints = 0;
    for (let i = 1; i < pointsArray.length; i++) {
        if (pointsArray[i] > maxpoints) {
            quantityrecordbreakes++
            maxpoints = pointsArray[i]
        } else if (pointsArray[i] < minimumpoints) {
            matchwithminpoints = i + 1;
            minimumpoints = pointsArray[i];
        }
    } return [quantityrecordbreakes, matchwithminpoints]
}


console.log(recordBreaker("10 20 20 8 25 3 0 30 1"))