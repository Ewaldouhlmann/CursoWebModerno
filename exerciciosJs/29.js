const isbetwTenntwenty = (array) => {
    let countbetw = 0
    for (let i = 0; i < array.length; i++) {
        if (20 >= array[i] && array[i] >= 10) {
            countbetw++;
        }
    } return countbetw;
}

console.log(isbetwTenntwenty([10, 215, , 612, 19, , 165, , 84, 1, 1, 15, 1, 6, 18]))