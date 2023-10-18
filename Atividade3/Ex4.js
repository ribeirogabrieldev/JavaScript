const prompt = require('prompt-sync')();

var num = parseInt(prompt("Digite um número: "));

if(num % 5 === 0 && num % 11 === 0){
    console.log("Esse número é divisível por 5 e 11!");
}else{
    console.log("Esse número não é divisível por 5 e 11!");
}