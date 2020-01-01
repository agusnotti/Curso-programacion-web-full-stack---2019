let readlineSync = require('readline-sync');

let cantidadAulas = readlineSync.question("Ingrese cantidad de aulas: " ); 
//SE DEFINEN DOS ARREGLOS, UNO PARA NOMBRES DE AULAS Y EL OTRO PARA LAS CAPACIDADES RESPECTIVAS
let coloresAulas = new Array(cantidadAulas);
let capacidadAulas = new Array(cantidadAulas);

console.log("Ingrese nombres de las aulas");
cargarArreglo(coloresAulas, cantidadAulas);
console.log("Ingrese capacidad de las aulas");
cargarArreglo(capacidadAulas, cantidadAulas); 

let cantidadAlumnos = readlineSync.question("Ingrese la cantidad de infantes del curso: ");  

let mejorAula = obtenerMejorAula(capacidadAulas, cantidadAulas, cantidadAlumnos); 
if (mejorAula > -1) {
    console.log("La mejor aula es: " + coloresAulas[mejorAula] );
} else {
    console.log("No hay un aula suficientemente grande para "+cantidadAlumnos+" infantes");
}

//FUNCION QUE REALIZA LA CARGA DE DATOS EN UN ARREGLO
function cargarArreglo(v, cantidad) {
    let indice;
    for (indice=0; indice<cantidad; indice++) {
        v[indice] = readlineSync.question("Ingrese el valor en ", indice, ": ");
    }
}
//FUNCION QUE DETERMINA QUE AULA ES CAPAZ DE CONTENER LOS ALUMNOS Y MINIMIZAR LOS LUGARES DESOCUPADOS A LA VEZ
function obtenerMejorAula (asientosAulas, largo, cantidadInfantes) { 
    let indiceMejorAula = -1 ;
    let indice;    
    for (indice=0; indice<largo; indice++) {    //RECORRE AULAS
        if (asientosAulas[indice] >= cantidadInfantes) {  //SOLO CONSIDERA AQUELLAS QUE PUEDEN CONTENER LA CANTIDAD DESEADA
            if (indiceMejorAula == -1) {  //SI ES LA PRIMER VEZ SE GUARDA LA POSICION 
                indiceMejorAula = indice; 
            } else if (asientosAulas[indice] < asientosAulas[indiceMejorAula]) { //DETERMINA SI LA CAPACIDAD ES LA MENOR POSIBLE
                indiceMejorAula = indice;
            }
        }
    }
    return indiceMejorAula; //RETORNA LA POSICION DE LA CAPACIDAD OPTIMA SI NINGUN AULA CUMPLIO RETORNA -1
}