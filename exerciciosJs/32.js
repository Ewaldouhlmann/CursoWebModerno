const getAvarageValue = (array) => {
    let sum = 0;
    let countOfNum = 0;
    console.log(countOfNum, sum)
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        countOfNum += 1;
    }
    let average = sum / countOfNum
    return average
}

console.log(getAvarageValue([9,9,9,9,9,8]))