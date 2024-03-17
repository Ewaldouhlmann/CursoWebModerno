const vetores = () => {
    const intvetor = [1, 2, 3, 4, 5, 6, 8, 9];
    const strVetor = ['a', 'b', 'c', 'd', 'e', 'f'];
    const doubleVetor = [true, false, false, true];
    const concatVec = intvetor.concat(strVetor, doubleVetor)

    const resultado1 = intvetor.concat(strVetor);
    console.log(resultado1);

    console.log(concatVec);
}
vetores()