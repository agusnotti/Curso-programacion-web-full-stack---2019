let rl = require('readline-sync');
let dimensionArreglo = rl.questionInt("cantidad de butacas ");

let butacasVacias = 0;

let cineArreglo = new Array (dimensionArreglo);
cargarArreglo(cineArreglo, dimensionArreglo)

for (let i = 0; i < dimensionArreglo; i++) {
    if (cineArreglo[i] == 0){
        butacasVacias++
    }
}
console.log('cantidad de butacas vacias '+ butacasVacias);


function cargarArreglo(v, dimensionArreglo){
    console.log('ingrese 0 si la butaca esta vacia, y sino ingrese 1 ');

    for (let i = 0; i < dimensionArreglo; i++) {
        v[i]= rl.questionInt("butaca posicion "+ i +" :");
    } 
}