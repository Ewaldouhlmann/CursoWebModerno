const newSalary = (plan, currentsalary) => {
    /*This function receives a plan and the current salary and returns the new salary 
    defined by the type of the plan */
    plan.toLowerCase()
    switch (plan) {
        case "a":
            return (currentsalary * 1.1);
        case "b":
            return (currentsalary * 1.15);
        case "c":
            return (currentsalary * 1.2);
        default:
            return (currentsalary);
    }
}

console.log(newSalary("c", 1000))