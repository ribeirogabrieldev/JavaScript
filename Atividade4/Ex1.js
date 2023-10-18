var pares = 0;

for(i = 0; i <= 100; i++){
    if(i % 2 === 1){
        continue;
    }else{
        pares += i;
    }
}

console.log(pares);