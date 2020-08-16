//Como selecionar
/*
console.log(document.getElementById('nome_usuario'));
console.log(document.getElementsByTagName('input'));
console.log(document.getElementsByClassName('campo_texto'));
console.log(document.getElementsByName('nome'));
*/

function distribuiCaractere() {
    var caracter = document.getElementById('entrada').value;
    document.getElementById('entrada').value = '';
    console.log(caracter);
    caracter.trim();

    switch (caracter) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            document.getElementById('numeros').value += caracter;
            break;
        default:
            document.getElementById('letras').value += caracter;
    }
}