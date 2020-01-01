let rl = require('readline-sync');
let dimensionArreglo = rl.questionInt('ingrese NUMERO para la dimension del arreglo ');
let positivos, negativos, ceros;
positivos = 0;
negativos = 0;
ceros = 0;

let tiposDeNumeros = new Array(dimensionArreglo);

for (let i = 0; i < dimensionArreglo; i++) {
    num = rl.questionInt('ingrese numero para posicion '+ i +': ');
    tiposDeNumeros[i] = num;
}

for (let i = 0; i < dimensionArreglo; i++) {
    if (tiposDeNumeros[i] > 0){
        positivos++;
    }
    if (tiposDeNumeros[i] < 0){
        negativos++;
    }
    if (tiposDeNumeros[i] == 0){
        ceros++;
    }
}
console.log(' numeros positivos: '+ positivos + '\n numeros negativos: '+ negativos+ '\n ceros: '+ ceros);
