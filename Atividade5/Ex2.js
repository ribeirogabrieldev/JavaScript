const prompt = require("prompt-sync")();

function dobrar(num){
    return num*2;
  }
  
let numero = parseInt(prompt("Digite um número: "));
console.log("Seu número dobrado equivale a:",dobrar(numero));