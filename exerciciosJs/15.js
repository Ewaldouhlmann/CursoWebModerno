const comprarCarro = (tipo) => {
    /*This function use a switch case to verify if a type of car is hatch or not and returns a msg*/
    tipo.toLowerCase();
    switch (tipo) {
        case "hatch":
            return "Compra efetivada!";
        case "sedans":
        case "motocicleta":
        case "caminhonete":
            return "Tem certeza que não prefere este modelo?";
        default:
            return "Não trabalhamos com este tipo de automóvel aqui";
    }
}

console.log(comprarCarro("motocicleta"))