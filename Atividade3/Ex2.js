const prompt = require('prompt-sync')();

var num = parseInt(prompt("Digite um número: "));

if(num % 2 === 0){
    console.log("Esse número é par");
}else{
    console.log("Esse número é ímpar");
}