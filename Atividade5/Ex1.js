const prompt = require("prompt-sync")();

function verificarIdade(idade){
  if(idade >= 18){
    console.log("Você é maior de idade");
  }else{
    console.log("Você é menor de idade");
  }
}

let idade = parseInt(prompt("Digite sua idade: "));
verificarIdade(idade);