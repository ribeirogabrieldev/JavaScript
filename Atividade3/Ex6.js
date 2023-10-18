const prompt = require('prompt-sync')();

var idade = parseInt(prompt("Digite sua idade: "));

if(idade >= 18){
    console.log("Você pode votar!");
}else if(idade >= 16){
    console.log("Você pode votar facultativamente!");
}else{
    console.log("Você não pode votar!");
}