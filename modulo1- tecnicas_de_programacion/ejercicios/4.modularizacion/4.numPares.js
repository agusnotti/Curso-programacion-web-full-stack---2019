let rl = require('readline-sync');
let num = rl.questionInt('ingrese numero ')
imprimirNumerosPares(num);

function imprimirNumerosPares (n){
    for (let numero = n; numero >= 2; numero--) {
        if (numero % 2 == 0){
            console.log(numero);
        }
    }
}


