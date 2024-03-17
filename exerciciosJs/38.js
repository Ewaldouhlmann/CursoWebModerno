const imparsbetween = (start = 0, end = 100) => {
    const max = Math.max(start, end);
    const min = Math.min(start, end);

    for (let i = min; i < max; i++) {
        if (i % 2 !== 0) {
            console.log(i)
        }
    }
}

imparsbetween()