let rl = require('readline-sync');
let numero=rl.questionInt("ingrese un numero: ");
let max=numero; 
let min=numero;
while (numero!=0) {
    numero=rl.questionInt("ingrese un numero: ");
    if (numero>max) max=numero; 
    if (numero<min && numero!= 0) min=numero; 
}
console.log("El maximo es ", max); 
console.log("El minimo es ", min);