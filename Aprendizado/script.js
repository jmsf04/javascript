var nome = prompt('Digite o seu nome');
var altura = parseFloat(prompt('Digite sua altura em centimetros'));
var peso = parseFloat(prompt('Digite o seu peso'));

altura /= 100;
console.log(altura);
console.log(peso);

var mc = peso / (Math.pow(altura, 2));
mc = mc.toFixed(2);
var clas;

if (mc < 16) {
    clas = 'Peso muito baixo, muito grave!!';
} else if (mc > 16 && mc < 16.99) {
    clas = 'Peso baixo, muito grave!!';
} else if (mc > 17 && mc < 18.49) {
    clas = 'Peso baixo';
} else if (mc > 18.50 && mc < 24.99) {
    clas = 'Peso normal';
} else if (mc > 25 && mc < 29.99) {
    clas = 'Sobrepeso';
} else if (mc > 30 && mc < 34.99) {
    clas = 'Obesidade grau 1';
} else if (mc > 35 && mc < 39.99) {
    clas = 'Obesidade grau 2';
} else if (mc > 40) {
    clas = 'Obesidade grau 3';
}

document.write(nome + " possui o índice de massa corporal igual a:" + mc + ", sendo classificado como: " + clas);