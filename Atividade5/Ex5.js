const prompt = require("prompt-sync")();

function imc(peso, altura){
    imc = peso / (altura * altura);
    return imc;
}

let peso = parseFloat(prompt("Digite seu peso em Kg: "));
let altura = parseFloat(prompt("Digite sua altura em metros: "));

console.log("Seu IMC é igual a",imc(peso,altura));