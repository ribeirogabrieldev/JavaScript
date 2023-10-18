var lado1 = parseFloat(prompt("Digite o primeiro lado do triângulo: "));
var lado2 = parseFloat(prompt("Digite o segundo lado do triângulo: "));
var lado3 = parseFloat(prompt("Digite o terceiro lado do triângulo: "));

if(lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1){
    if(lado1 === lado2 && lado2 === lado3){
    console.log("Triângulo Equilátero.");
    }else if(lado1 === lado2 || lado1 === lado3 || lado2 === lado3){
    console.log("Triângulo Isósceles.");
    }else{
    console.log("Triângulo Escaleno.");
    }
}else{
  console.log("Não é possível formar um triângulo com esses lados.");
}
