const sumofVec = () => {
    let vectorPilha = [1, 2, 3, 4, 5];
    let vectorAdd = [6, 7, 8, 9, 10];
    for (let i = 0; i < vectorAdd.length; i++) {
        vectorPilha.push(vectorAdd[i])
    }
    console.log(vectorPilha);
}

sumofVec()