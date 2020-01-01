let readlineSync = require('readline-sync');

let numAlum = readlineSync.question("Ingrese el numero de alumnos: ");
let alumnos = new Array(numAlum); 
let nota1 = new Array(numAlum); 
let nota2 = new Array(numAlum); 
let nota3 = new Array(numAlum);

console.log("Cargando datos");
cargarDatosAlumnos(alumnos,nota1,nota2,nota3,numAlum);

let alumBuscado = readlineSync.question("A quien busca: ");
//BUSCAR ALUMNO
let indAlum = buscarAlumno(alumBuscado, alumnos, numAlum);
//Si lo encontre imprimo el promedio 
if (indAlum > -1) {
    console.log("El promedio de ", alumBuscado, " es ", calcularPromedio(nota1[indAlum], nota2[indAlum], nota3[indAlum]));
} else {
    console.log("No se pudo encontrar a ", alumBuscado); 
}

//FUNCION QUE CARGA LOS DATOS DE LOS ALUMNOS, NOMBRE Y LAS 3 NOTAS
function cargarDatosAlumnos(alumnos,nota1,nota2,nota3,alumNum) {
    let indice; 
    for (indice=0; indice<alumNum; indice++) {
        alumnos[indice]= readlineSync.question("Nombre: ");
        nota1[indice] = readlineSync.questionInt("Nota 1er trimestre: ");
        nota2[indice] = readlineSync.questionInt("Nota 2do trimestre: ");
        nota3[indice] = readlineSync.questionInt("Nota 3er trimestre: ");
    }
}
//FUNCION QUE BUSCA UN ALUMNO EN LA LISTA RETORNANDO SU POSICION SI LO ENCUENTRA O -1 SINO LO ENCUENTRA
function buscarAlumno(alumBuscado, alumnos, alumNum) {
    let indAlum = -1;    
    let indice = 0;    
    while (indice < alumNum && indAlum == -1) {
        if (alumnos[indice] == alumBuscado) {
            indAlum = indice;
        }
        indice++; 
    }
    return indAlum;
}
    
//FUNCION QUE CALCULA EL PROMEDIO DE 3 NOTAS
function calcularPromedio(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}
