export const TypeText = (instruments) => {
    if (instruments === 'Guitarra') {
        console.log('Tem cordas')
    } else if (instruments === 'Bateria') {
        console.log('Tem pedal')
    } else if (instruments === 'Microfone') {
        console.log('tem fios');
    } else {
        console.log('não existe esse instrumento')
    }
    
}

export const CallAlert = (musician) => {
    switch (musician) {
        case "Slash": console.log('Guitarrista');
            break;
        case "Alexandre Aposan": console.log('Baterista');
            break;
        case "Ana Rock": console.log('Cantora')
            break;
        default:
            console.log('Não atente as 3 opções')
    }
}
