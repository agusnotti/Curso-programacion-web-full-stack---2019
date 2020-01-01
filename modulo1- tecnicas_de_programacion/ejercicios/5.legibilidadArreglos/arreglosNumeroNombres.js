let rl = require('readline-sync');
let numeroIngresado, nombreIngresado;

let numeroArreglo = new Array (3);

for (i = 0; i < 3; i++){
    numeroIngresado = rl.questionInt('ingrese numero ');
    numeroArreglo[i] = numeroIngresado;
}

let nombreArreglo = new Array (2);

for (i = 0; i < 2; i++){
    nombreIngresado = rl.question('ingrese nombre ');
    nombreArreglo[i] = nombreIngresado;
}

for (let i = 0; i < 3; i++) {
    console.log('numero en posicion '+ i + ' '+numeroArreglo[i]);
}
for (let i = 0; i < 2; i++) {
    console.log('nombre en posicion '+ i + ' '+nombreArreglo[i]);
}