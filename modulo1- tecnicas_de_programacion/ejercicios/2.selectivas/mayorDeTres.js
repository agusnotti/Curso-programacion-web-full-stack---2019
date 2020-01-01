let readlineSync = require('readline-sync');
let num1 = readlineSync.questionInt('Ingrese un numero: ');
let num2 = readlineSync.questionInt('Ingrese otro numero: ');
let num3 = readlineSync.questionInt('Ingrese otro numero: ');

if (num1 > num2 && num1 > num3){
    console.log('el mayor numero ingresado es el ', num1);
} else if (num2 > num1 && num2 > num3){
    console.log('el mayor numero ingresado es el ', num2);
} else if (num3 > num1 && num3 > num2){
    console.log('el mayor numero ingresado es el ', num3);
} else {
    console.log('los numeros son iguales');
}