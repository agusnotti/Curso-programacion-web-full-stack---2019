let rl = require('readline-sync');
let dimensionArreglo = rl.questionInt("NUMERO PARA DIMENSION DEL ARREGLO ");
let productoEscalar= 0;

let v1 = new Array (dimensionArreglo);
console.log("valores arreglo 1");
cargarArreglo(v1,dimensionArreglo);


let v2 = new Array (dimensionArreglo);
console.log("valores arreglo 2");
cargarArreglo (v2, dimensionArreglo);


for (let i = 0; i < dimensionArreglo; i++) {
    productoEscalar = productoEscalar + (v1[i] * v2[i]);
} 
console.log("el producto escalar es "+productoEscalar);

function cargarArreglo(v,dimensionArreglo){
    for (let i = 0; i < dimensionArreglo; i++) {
        v[i]= rl.questionInt("numeros de posicion "+i+ " :");
    } 
}