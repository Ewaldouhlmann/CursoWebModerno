const roundSchoolNotes = (grade) => {
    /* This function rounds all grades greater than 38 if the difference
       between the next multiple of 5 and the grade is smaller than 2 */
    for (let i = 40; i <= 100; i += 5) {
        if (i > grade) {
            if ((i - grade) < 3) {
                nota = i
                break
            } break

        }
    } return grade
}

console.log(roundSchoolNotes(42))