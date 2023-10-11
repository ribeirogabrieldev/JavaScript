const prompt = require('prompt-sync')();

var num1 = parseInt(prompt("Digite um número: "));

console.log("A incremento é: ", ++num1);
console.log("O decremento é: ", --num1);