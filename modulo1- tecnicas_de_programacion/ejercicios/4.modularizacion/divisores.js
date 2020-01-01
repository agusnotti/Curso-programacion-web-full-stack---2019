let rl = require('readline-sync');
let num = rl.questionInt('ingrese un numero ');
let cantDivisores = cantidadDeDivisores (num);
console.log(cantDivisores);

function cantidadDeDivisores (num){
    let contador = 0;
    for (let divisor = 1; divisor <= num; divisor++) {
        if (esMultiplo (num, divisor)){
            contador++;
            console.log('divisor '+divisor);
        }
    }
    return contador;
}

function esMultiplo (num1, num2){
    if (num1 % num2 == 0){
        return true;
    } else {
        return false;
    }
}