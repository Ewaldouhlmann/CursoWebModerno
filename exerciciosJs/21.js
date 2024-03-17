const priceMedplan = (age) => {
    /*This function calculate the price for the medicine plan based on the age of the client */
    let pricePlan = 100
    if (age < 10) {
        pricePlan += 80
    } else if (age <= 30) {
        pricePlan += 50
    } else if (age < 60) {
        pricePlan += 95
    } else {
        pricePlan += 130
    } return pricePlan
}

console.log(priceMedplan(50))