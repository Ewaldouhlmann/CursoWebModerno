const businessDay = (day) => {
    /*This function verify if a day is a business day or a weekend*/
    switch (day) {
        case 1:
            console.log('Fim de semana')
            break;
        case 2:
            console.log('Dia útil')
            break;
        case 3:
            console.log('Dia útil')
            break;
        case 4:
            console.log('Dia útil')
            break;
        case 5:
            console.log('Dia útil')
            break;
        case 6:
            console.log('Dia útil')
            break;
        case 7:
            console.log('Fim de semana')
            break;
        default:
            console.log('Dia inválido')
            break;

    }
}

businessDay(1) // Fim de semana
businessDay(8) // Dia útil