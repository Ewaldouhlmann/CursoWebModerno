const getMinandMax = (array) => {
    let min = array[0];
    let max = array[1];
    for (let i = 0; i < array.length; i++) {
        if (min < array[i]) {
            min = array[i];
        } else if (max > array[i]) {
            max = array[i];
        }
    } return [min, max];
}

console.log(getMinandMax([10, 215, , 612, 19, , 165, , 84, 1, 1, 15, 1, 6, 18]))