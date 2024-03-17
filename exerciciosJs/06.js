const simpleFinancialApplication = (initiallyApport, interestperc, applicationtime) => {
    // This function is used to calculate the financial balance with an initial apport with simple interest percentual 
    let initialValue = initiallyApport;
    let perc = interestperc / 100;
    let profitperTime = initialValue * perc;
    for (let i = 0; i < applicationtime; i++) {
        initialValue += profitperTime;
    }
    return initialValue;
};

const compoundFinancialApplication = (initiallyApport, interestperc, applicationtime) => {
    // This function is used to calculate the financial balance with an initial apport with compound interest percentual
    let initialValue = initiallyApport;
    let perc = interestperc / 100;
    for (let i = 0; i < applicationtime; i++) {
        initialValue *= (perc + 1);
    }
    return initialValue;
};

console.log(simpleFinancialApplication(5000, 12, 5));
console.log(compoundFinancialApplication(5000, 12, 20));
