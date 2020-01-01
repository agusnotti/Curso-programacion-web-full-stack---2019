let rl = require('readline-sync');
let numeroDeseado; 

let numeroDeseadoArreglo = new Array (5); 

for (let i = 0; i < 5; i++) {
    numeroDeseado = rl.questionInt('ingrese un numero para la posicion  '+ i + ' ');
    numeroDeseadoArreglo[i] = numeroDeseado;
}

for (let i = 0; i < 5; i++) {
    console.log('numero posicion '+ i + ' :'+numeroDeseadoArreglo[i]); 
}