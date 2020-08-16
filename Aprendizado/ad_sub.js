function conta(num1, num2, operacao) {
    if (operacao == 'soma') {
        var result = num1 + num2;
        return result;
    } else if (operacao == 'subtracao') {
        var result = num1 - num2;
        return result;
    } else {
        alert('Erro');
    }
}

var operacao = prompt("Digite o tipo de operação a ser feita, sendo soma ou subtracao:");
console.log(operacao);
var num1 = parseFloat(prompt("Digite o primeiro numero:"));
console.log(num1);
var num2 = parseFloat(prompt("Digite o segundo numero:"));
console.log(num2);
document.write("O resultado da operação de " + operacao + " é de: " + conta(num1, num2, operacao));