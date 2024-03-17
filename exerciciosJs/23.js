const finalGrade = (fstgrade, scdgrade, trdgrade) => {
    /*This function takes the final grade of a school(a weigheted avarege, where the highest grade
     worth 4 and the others 3)*/
    const bestGrade = Math.max(fstgrade, scdgrade, trdgrade);
    const worstGrade = Math.min(fstgrade, scdgrade, trdgrade);
    const miidelGrade = fstgrade - bestGrade + scdgrade - worstGrade + trdgrade;
    const finalGrade = ((bestGrade * 4) + (miidelGrade * 3) + (worstGrade * 3)) / 10
    return finalGrade
}

console.log(finalGrade(10, 3, 5))