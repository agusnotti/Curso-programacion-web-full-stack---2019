let readlineSync= require('readline-sync');
let num1 = readlineSync.questionInt('ingrese un numero ');
let num2 = readlineSync.questionInt('ingrese otro numero ');
let suma = 0;

while (num1 <= num2) {
    suma = suma + num1;
    console.log(suma);
    num1++;
}
