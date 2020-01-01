let readlineSync=require('readline-sync');
let num=readlineSync.question('ingrese un numero ');

if (num > 20){
    console.log('el numero ingresado es mayor a 20');
} else if (num < 20){
    console.log('el numero ingresado es menor a 20');
} else {
    console.log('el numero es 20');
}