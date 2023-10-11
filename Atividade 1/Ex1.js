const prompt = require('prompt-sync')();

var num1 = parseInt(prompt("Digite um número para soma: "));
var num2 = parseInt(prompt("Digite outro número para soma: "));

console.log("O resultado é: ", (num1 + num2));