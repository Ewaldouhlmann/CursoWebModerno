const changeVectors = (vectorA, vectorB) => {
    for (let i = 0; i < vectorA.length; i++) {
        [vectorA[i], vectorB[i]] = [vectorB[i], vectorA[i]];
    } console.log(vectorA, vectorB)
}

changeVectors([1, 2, 3, 4, 5, 6, 7], [7, 6, 5, 4, 3, 2, 1])