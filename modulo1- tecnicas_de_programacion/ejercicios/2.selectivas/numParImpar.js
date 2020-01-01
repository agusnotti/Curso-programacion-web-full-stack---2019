let readlineSync=require('readline-sync');
let num=readlineSync.questionInt('Ingrese un numero: '); 

if (num == 0){
    console.log('el numero es 0');
} else if (num % 2 == 0){
    console.log('el numero es par');
} else {
    console.log('el numero es impar');
}
