let rl = require('readline-sync');
let nombreIngresado; 
let dimensionDeseada = rl.questionInt('NUMERO para la dimesion del arreglo: ');

let nombreArreglo = new Array (dimensionDeseada); 

for (let i = 0; i < dimensionDeseada; i++) {
    nombreIngresado = rl.question('ingrese un NOMBRE para la posicion  '+ i + ' ');
    nombreArreglo[i] = nombreIngresado;
}

for (let i = 0; i < dimensionDeseada; i++) {
    console.log('posicion '+ i + ' :'+nombreArreglo[i]); 
}