let readlineSync = require('readline-sync');

let nroButacas = readlineSync.questionInt("Ingrese la cantidad de butacas: ");

let butacas = new Array(nroButacas);

console.log("Simulando butacas ocupadas o no.");
cargarButacas(butacas, nroButacas); 

console.log("El número de butacas desocupadas es: ", contarButacasDesocupadas(butacas, nroButacas));  

//FUNCION QUE SIMULA BUTACAS OCUPADAS O NO
function cargarButacas(butacas,nroButacas) {
    let indice; 
    for (indice=0; indice<nroButacas; indice++) {
        butacas[indice] = Math.floor(Math.random()*2); //GENERA UN 0/1 (F/V) DE MANERA ALEATORIA
    }
}
//FUNCION QUE CUENTA BUTACAS DESOCUPADAS
function contarButacasDesocupadas(butacas,nroButacas) {
    let desocupadas=0;
    let indice; 
    for (indice=0; indice<nroButacas; indice++) {
        if (butacas[indice] == 0) //UN 0 SIGNIFICA DESOCUPADA
            desocupadas++;
    }
    return desocupadas;
}