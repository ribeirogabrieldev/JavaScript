const prompt = require("prompt-sync")();

function calcArea(largura, altura){
    if(largura === altura){
        console.log("Isso é um quadrado!");
    }else{
        console.log("A área do seu retângulo é igual a:",(largura*altura));
    }
}

let larg = parseInt(prompt("Digite a largura do retângulo: "));
let altura = parseInt(prompt("Digite a altura do retângulo: "));

calcArea(larg, altura);