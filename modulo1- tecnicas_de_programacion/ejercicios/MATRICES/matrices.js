let rl = require('readline-sync');
let dimensionFila = rl.questionInt('dimension filas ');
let dimensionColumnas = rl.questionInt ('dimension columnas ');

//INICIALIZO LA MATRIZ
let matriz = new Array (dimensionFila);
for (let i = 0; i < dimensionFila; i++) {
    matriz[i] = new Array (dimensionColumnas); 
}

//cargo datos
for (let f = 0; f < dimensionFila; f++) {
    for (let c = 0; c < dimensionColumnas; c++) {
        matriz[f][c]= Math.floor(Math.random()*100);
    }
}

//muestro
for (let f = 0; f < dimensionFila; f++) {
    for (let c = 0; c < dimensionColumnas; c++) {
        console.log(matriz[f][c]);        
    }
}