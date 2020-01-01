let rl = require('readline-sync');
let primerNum=rl.questionInt("ingrese un numero: ");
let segundoNum=rl.questionInt("ingrese otro numero: ");
let suma=0;
if (primerNum>segundoNum) {     //intercambio o swap de variables para mantener que primerNum < segundoNum
    let auxiliar=primerNum;
    primerNum=segundoNum;
    segundoNum=auxiliar;
}
for (let numero=primerNum;numero<=segundoNum;numero++) {
    suma+=numero;   //acumulo los numero en la variable suma
}
console.log("La suma de los numeros entre ",primerNum," y ",segundoNum," es ",suma);