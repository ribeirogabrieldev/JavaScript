const prompt = require('prompt-sync')();

var num1 = parseInt(prompt("Digite o primeiro número: "));
var num2 = parseInt(prompt("Digite o segundo número: "));
var num3 = parseInt(prompt("Digite o terceiro número: "));

if (num1 > num2 && num1 > num3){
    console.log("O número 1 é maior entre os três");
}else if(num2 > num3 && num2 > num1){
    console.log("O número 2 é maior entre os três");
}else if(num3 > num2 && num3 > num1){
    console.log("O número 3 é maior entre os três");
}