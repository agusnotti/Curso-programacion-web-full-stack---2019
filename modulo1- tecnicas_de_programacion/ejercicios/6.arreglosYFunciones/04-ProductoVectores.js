let readlineSync = require('readline-sync');

let largo = 3;
let v1 = new Array(largo);
let v2 = new Array(largo);
let v3 = new Array(largo);
let v4 = new Array(largo);
let resultado = new Array(largo);

cargarArreglo(v1, largo); //ESTAMOS REUSANDO LA FUNCION cargarArreglo DEL EJERCICIO 01-ProdEscalar
cargarArreglo(v2, largo); 
cargarArreglo(v3, largo); 
cargarArreglo(v4, largo); 

multiplicarArreglo(v1, v2, resultado, largo); 
multiplicarArreglo(v3, resultado, resultado, largo); 
multiplicarArreglo(v4, resultado, resultado, largo); 

console.log("El resultado es: ["+mostrarResultado(resultado, largo)+"]"); 

//FUNCION SOLICITADA EN EL ENUNCIADO - RECIBE 3 ARREGLOS Y GUARDA EL PRODUCTO DE LOS DOS PRIMEROS EN EL TERCERO
function multiplicarArreglo(v1, v2, v3, largo)  {
    let indice;
    for (indice=0; indice<largo; indice++) {
        v3[indice] = v1[indice] * v2[indice];
    }
}
//FUNCION QUE RETORNA UN ARREGLO EN UNA LINEA
function mostrarResultado(arreglo, largo)  {
    let indice;
    let cadena="";
    for (indice=0; indice<largo; indice++) {
        cadena+=arreglo[indice]+" ";
    }
    return cadena;
}
