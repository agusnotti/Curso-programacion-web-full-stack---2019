/*Diseñar un algoritmo que muestre por pantalla la tabla de multiplicación del número ingresado por el usuario
Para definir hasta qué número desea que muestre la tabla de multiplicación, el usuario también deberá ingresar dicho valor*/

let rl = require('readline-sync');
let num1 = rl.questionInt('ingrese tabla de multiplicar: ');
let num2 = rl.questionInt('ingrese numero hasta donde quiere multiplicar: ');
let multiplicacion=1;

for (let i = 0; i < num2; i++) {
    multiplicacion = num1*i;
    console.log(num1+ 'x' + i + ' = '+multiplicacion);
}