const isaLeapyear = (year) => {
    // This function checks whether a given year is a leap year.
    if (year % 400 === 0) {
        return true;
    } else {
        if (year % 100 === 0) {
            return false;
        } else {
            if (year % 4 === 0) {
                return true;
            }
        }
    } return false;
}

console.log(isaLeapyear(2012))