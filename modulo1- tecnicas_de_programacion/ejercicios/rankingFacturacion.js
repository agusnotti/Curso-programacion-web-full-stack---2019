let readlineSync = require('readline-sync');
let cantidad = 4;
let clientes = new Array(cantidad);
let facturacion = new Array(cantidad);
//Cargo ordenado, uno por uno
console.log ("Cargando los arreglos de forma ordenada" );
let cliente;
let fact;
let numCliente;
let i, j;

for (numCliente = 0; numCliente < cantidad; numCliente++ ) {
    cliente = readlineSync.question("Cliente ", numCliente + 1, ": ");
    fact = readlineSync.questionInt("Facturacion ", numCliente + 1, ": ");
    i = 0
    while (i < numCliente && facturacion[i] > fact) {
    i++;
    }
    for (j = numCliente; j > i; j--) {
    clientes[j] = clientes[j-1];
    facturacion[j] = facturacion[j-1];
    }
    clientes[i] = cliente ;
    facturacion[i] = fact ;
    }

    for (let posicion = 0; posicion < 4; posicion++) {
        console.log ("(",posicion, ") "+ clientes[posicion],"[",facturacion[posicion],"] ");
        }