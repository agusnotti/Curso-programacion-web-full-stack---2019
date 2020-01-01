"use strict";
exports.__esModule = true;
var fs = require("fs");
var arregloColores = new Array();
cargarArreglo(leerArchivo('colores.txt'));
console.log(arregloColores);
console.log(arregloColores[2]);
function cargarArreglo(listadoColores) {
    for (var i = 0; i < listadoColores.length; i++) {
        insertarPalabra(listadoColores[i]);
    }
}
function insertarPalabra(palabra) {
    arregloColores.push(palabra);
}
function leerArchivo(rutaArchivo) {
    var archivo = fs.readFileSync(rutaArchivo, 'utf8');
    var lineas = archivo.split('\n');
    lineas = lineas.map(function (linea) { return linea.replace('\r', ''); });
    return lineas;
}
//console.log(leerArchivo('colores.txt'));
