let readlineSync = require('readline-sync');
let num;

while (num != 0){
    num=readlineSync.questionInt("Ingrese un numero: ");

    if (num % 2 != 0){
        console.log('numero impar');
    } else {
        console.log('numero par');
    }
}
console.log('FIN. ingreso 0');

