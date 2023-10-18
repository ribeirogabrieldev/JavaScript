const prompt = require('prompt-sync')();

var dia = parseInt(prompt("Digite o dia do seu anivesário: "));
var mes = parseInt(prompt("Digite o mês do seu aniversário: "));
var ano = 2023;

if(ano === 2023 && mes >= 1 && mes <= 12 && dia >= 1 && dia <= 31){
    console.log("Data de aniversário válida!");
}else{
    console.log("Data de aniversário inválida!");
}
  