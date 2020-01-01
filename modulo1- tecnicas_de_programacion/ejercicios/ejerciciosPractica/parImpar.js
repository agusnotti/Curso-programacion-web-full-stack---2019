/*Realizar un algoritmo que dado un número entero ingresado por el usuario, visualice en pantalla si es par o impar
• En el caso de ingresar un cero, se debe volver a pedir el número por teclado (hasta que se ingrese un número mayor que cero)*/

let rl = require('readline-sync');
let numero = rl.questionInt ('ingrese un numero ');;


esPar(numero);

function esPar (num){
    while (num == 0){
        console.log('ingreso 0');
        num = rl.questionInt ('ingrese un numero ');
    }
    if (num % 2 == 0){
        console.log('es par');
    } else {
        console.log('es impar');
    }
}