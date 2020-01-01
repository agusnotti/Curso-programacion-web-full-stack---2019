/*Escriba un programa que pida al usuario dos números enteros, y luego retorne la suma de todos los números 
que están entre ellos. Por ejemplo, si los números son 2 y 7, debe entregar como resultado  2 + 3 + 4 + 5 + 6 + 7 = 27*/

let rl = require('readline-sync');
let num1 = rl.questionInt('ingrese numero 1: ');
let num2 = rl.questionInt('ingrese numero 2: ');
let suma=0;

for (let i = num1; i <= num2; i++) {
    suma += i;
}
console.log(suma);  
