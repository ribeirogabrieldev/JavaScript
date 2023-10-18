const prompt = require('prompt-sync')();

var nota1 = parseFloat(prompt("Digite sua primeira nota: "));
var nota2 = parseFloat(prompt("Digite sua segunda nota: "));
var media = (nota1 + nota2)/2

if(media === 100){
    console.log("Aprovado com Distinção");
}else if(media >= 70){
    console.log("Aprovado");
}else{
    console.log("Reprovado");
}