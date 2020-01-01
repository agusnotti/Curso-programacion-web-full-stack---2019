let rl = require('readline-sync');
let dimensionArreglo = rl.questionInt('ingrese NUMERO para la dimension del arreglo ');
let suma = 0; 
let numerosArreglo;

let elementosArreglo = new Array (dimensionArreglo);

for (let i = 0; i < dimensionArreglo; i++) {
    numerosArreglo = rl.questionInt('ingrese un numero ');
    elementosArreglo[i] = numerosArreglo;
    suma += elementosArreglo[i]
}

for (let i = 0; i < dimensionArreglo; i++){
    console.log('el numero de la posicion ' + i + ' es: '+ elementosArreglo[i]);    
}
    console.log('la suma de los elementos del arreglo es: '+suma);