const prompt = require('prompt-sync')();

var num = parseInt(prompt("Digite um número para obter sua tabuada: "));
tabuada = 0;

for(i = 0; i <= 10; i++){
    tabuada += num*i;
    console.log(num," x ",i," = ",tabuada);
}