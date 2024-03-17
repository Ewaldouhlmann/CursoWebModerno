const gradesConcepts = (gradesArray) => {
    let conceptsArray = []
    for (let i = 0; i < gradesArray.length; i++) {
        if (gradesArray[i] <= 4.9) {
            conceptsArray.push('D')
        }
        else if (gradesArray[i] <= 6.9) {
            conceptsArray.push('C')
        }
        else if (gradesArray[i] <= 8.9) {
            conceptsArray.push('B')
        } else {
            conceptsArray.push('A')
        }
    } for (let i = 0; i < gradesArray.length; i++) {
        console.log(gradesArray[i] + '=' + conceptsArray[i])
    }
}

gradesConcepts([1, 2, 3, 4, 5, 6, 7, 8, 9])