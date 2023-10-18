const prompt = require('prompt-sync')();

var num = parseInt(prompt("Digite um número para fazer a contagem regressiva: "));
var contagem = num;

while(contagem >= 0){
    console.log(contagem--);
}