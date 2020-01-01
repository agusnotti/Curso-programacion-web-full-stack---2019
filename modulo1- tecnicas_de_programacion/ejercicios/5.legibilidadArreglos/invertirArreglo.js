let rl = require('readline-sync');
let dimensionArreglo = rl.questionInt('ingrese NUMERO para la dimension del arreglo ');

let invertirArreglo = new Array(dimensionArreglo);

for (let i = 0; i < dimensionArreglo; i++) {
    num = rl.questionInt('ingrese numero para posicion '+ i +': ');
    invertirArreglo[i] = num;
}

for (let i = dimensionArreglo - 1; i >= 0; i--) {
    console.log(invertirArreglo[i]); //no invierte el arreglo, lo muestra invertido
}

console.log(invertirArreglo); 