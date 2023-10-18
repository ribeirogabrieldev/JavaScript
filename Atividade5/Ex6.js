const prompt = require("prompt-sync")();

function conversorTemp(escolha, temperatura){
    if(escolha == 1){
       return (temperatura * 9/5) + 32;
    }else if(escolha == 2){
       return (temperatura - 32) * 5/9;
    }else{
      return ("Escolha inválida!");
    }
}

let escolha = parseInt(prompt("Qual temperatura você quer converter? 1 - Celsius || 2 - Fahrenheit: "));
let temp = parseInt(prompt("Digite a temperatura: "));

console.log(conversorTemp(escolha,temp));