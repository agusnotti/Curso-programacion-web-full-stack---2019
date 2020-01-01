let readlineSync = require('readline-Sync');
let num1 = readlineSync.questionInt('ingrese un numero ');
console.log('ha ingresado el numero: ', num1);
let num2=readlineSync.questionInt('ingrese otro numero ');
console.log('ha ingresado el numero: ', num2);
let resultadoSuma=num1+num2;
console.log('el resultado es: ',resultadoSuma);
