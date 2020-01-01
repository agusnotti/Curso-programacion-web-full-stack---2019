//Escriba un algoritmo que genere un histograma horizontal de 10 valores ingresados por teclado, luego de leer todos los valores.

let rl = require('readline-sync');
let n = rl.question('ingrese dimension arreglo ');
let valor, histograma;

let cargarArreglo = new Array (n);
for (let i = 0; i < n; i++) {
    valor=rl.question('ingrese valor de posicion '+ i + ' ');
    histograma = hacerLinea(valor);
    cargarArreglo[i] = histograma;
}

for (let i = 0; i < n; i++) {
    console.log(cargarArreglo[i] );
}

function hacerLinea(num) {
    let linea="";
    for (let i = 0; i < num; i++) {
        linea += "-";
    } 
    return linea + ' ' + num;
}