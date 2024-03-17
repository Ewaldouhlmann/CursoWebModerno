const timetoOverHeight = (hchl1, hchl2, percGrowth1, percGrowth2) => {
    if (hchl1 === hchl2) {
        return "As crianças tem a mesma altura!"
    } else {

        if (percGrowth1 > percGrowth2 && hchl1 < hchl2) {
            let timetoSurpass = 0;
            while (hchl1 < hchl2) {
                timetoSurpass += 1;
                hchl1 *= (percGrowth1 / 100)
                hchl2 *= (percGrowth2 / 100)

            } return timetoSurpass
        } else if (percGrowth1 < percGrowth2 && hchl1 > hchl2) {
            let timetoSurpass = 0;
            while (hchl2 < hchl1) {
                timetoSurpass += 1;
                hchl1 *= (1 + percGrowth1 / 100)
                hchl2 *= (1 + percGrowth2 / 100)

            } return timetoSurpass

        } else {
            return "Não haverá ultrapassagem de tamanho!"
        }
    }
}

console.log(timetoOverHeight(1, 2, 150, 100))