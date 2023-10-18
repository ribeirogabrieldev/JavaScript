const prompt = require("prompt-sync")();

function imparPar(num){
    if(num%2==0){
      console.log("O número",num,"é par!");
    }else{
      console.log("O número",num,"é ímpar!");
    }
}

let num = parseInt(prompt("Digite um número: "));
imparPar(num);