const getNegativevalues = (array) => {
    let negativeCount = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            negativeCount++;
        }
    } console.log(negativeCount)
}

getNegativevalues([1, 5, 8, 9, 19, 9, , 195, , 8, 2, 8, -1, 8, , -1, 89, -18,])