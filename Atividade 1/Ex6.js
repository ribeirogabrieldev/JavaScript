const prompt = require('prompt-sync')();

var num1 = parseInt(prompt("Digite um número: "));
var num2 = parseInt(prompt("Digite outro número: "));

console.log("A potenciação é: ", (num1 ** num2));