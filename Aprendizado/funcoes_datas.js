/*
var data = new Date();

//Dia atual do mês
//document.write(data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear());

//adicionar ou remover dias
document.write(data.toString());
data.setDate(data.getDate() + 1)
document.write('<br>');
document.write(data.toString());
document.write('<hr>');
document.write('<br>');

//adicionar ou remover meses
document.write(data.toString());
data.setMonth(data.getMonth() + 1)
document.write('<br>');
document.write(data.toString());
document.write('<hr>');
document.write('<br>');

//adicionar ou remover meses
document.write(data.toString());
data.setFullYear(data.getFullYear() + 1)
document.write('<br>');
document.write(data.toString());
document.write('<hr>');
document.write('<br>');
*/

//15/01/2017
var data1 = new Date(2017, 0, 15);

//23/02/2017
var data2 = new Date(2017, 1, 23);

document.write(data1.toString());
document.write('<br>');
document.write(data2.toString());
document.write('<br>');
document.write('<br>');

//converter data
document.write(data1.getTime());
document.write('<br>');
document.write(data2.getTime());
document.write('<br>');
document.write('<br>');

//encontrar a diferença de milisegundos entre data1 e data2
var ms_e_datas = Math.abs(data1.getTime() - data2.getTime());
var ms_dia = (1 * 24 * 60 * 60 * 1000);

document.write(ms_e_datas);
document.write('<br>');

//converter milisegundos em dias.
document.write('1 dia tem: ' + ms_dia + ' Milisegundos');
document.write('<br>');
document.write('A diferença em dias de Data1 e Data2 é: ' + Math.ceil(ms_e_datas / ms_dia) + ' Dias');