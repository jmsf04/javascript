/*function calcularArea(largura, comprimento) {

    var area = largura * comprimento;
    return area;

}

var largura = parseFloat(prompt('Digite a largura do terreno'));
var comprimento = parseFloat(prompt('Digite o comprimento do terreno'));
//var area = calcularArea(largura, comprimento);

document.write('O terreno possui: ' + calcularArea(largura, comprimento) + ' M/²')
*/
/*
function soma(a, b) {
    return a + b;
}

console.log(soma(7, 7));
*/
function soma() {
    var resultado = 0;
    for (var i in arguments) {
        resultado += arguments[i];
    }
    return resultado;
}

console.log(soma(7, 5, 3.2, 0.8));