let readlineSync = require('readline-sync');

let cantidad = readlineSync.question("Cantidad de elementos de los arreglos: ");
let v1 = new Array(cantidad); 
let v2 = new Array(cantidad); 

console.log("Cargando v1");
cargarArreglo(v1, cantidad);
console.log("Cargando v2");
cargarArreglo(v2, cantidad);

console.log("Multiplicacion escalar = ", obtenerProductoEscalar(v1, v2, cantidad) );

//FUNCION QUE REALIZA EL PRODUCTO ESCALAR ENTRE DOS ARREGLOS
function obtenerProductoEscalar(v1, v2, cantidad)   {
    let acum=0;
    let indice;
    for (indice=0; indice<cantidad; indice++) {
        acum = acum + (v1[indice] * v2[indice]);
    }
    return acum;
}
//FUNCION QUE REALIZA LA CARGA DE DATOS EN UN ARREGLO
function cargarArreglo(v, cantidad) {
    let indice;
    for (indice=0; indice<cantidad; indice++) {
        v[indice] = readlineSync.questionInt("Ingrese el valor en "+indice+": ");
    }
}
