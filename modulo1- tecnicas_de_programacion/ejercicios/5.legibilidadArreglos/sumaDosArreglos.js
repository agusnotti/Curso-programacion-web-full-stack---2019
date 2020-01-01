let rl=require('readline-sync');
let numA, numB; 
let suma=0;

let arregloA = new Array (6);

for (let i = 0; i < 6; i++) {
    numA = rl.questionInt('numero para posicion '+ i +' del ARREGLO A ');
    arregloA[i] = numA;
}

let arregloB = new Array (6);
for (let i = 0; i < 6; i++) {
    numB = rl.questionInt('numero para posicion '+ i +' del ARREGLO B ');
    arregloB[i] = numB;
}

for (let i = 0; i < 6; i++){
    suma = arregloA[i] + arregloB[i];
    console.log ('el resultado de la suma entre '+ arregloA[i]+ ' + ' +arregloB[i]+ ' es '+ suma);
}