"use strict";
exports.__esModule = true;
var fs = require("fs");
var readlineSync = require("readline-sync");
var nombreIngresado = readlineSync.question('ingrese nombre ');
var nombres = new Array();
var colegios = new Array();
cargarArreglo(nombres, leerArchivo('nombres.txt'));
//console.log(nombres);
cargarArreglo(colegios, leerArchivo('colegios.txt'));
//console.log(colegios);
asignarColegio();
function asignarColegio() {
    var indice = buscarPersona(nombreIngresado);
    var indiceCol = -1;
    if (indice != -1) {
        indiceCol = Math.floor(Math.random() * (colegios.length));
        console.log(colegios[indiceCol]);
    }
    else {
        console.log('no se encontro la persona');
    }
}
function cargarArreglo(arreglo, listado) {
    for (var i = 0; i < listado.length; i++) {
        insertarPalabra(arreglo, listado[i]);
    }
}
function insertarPalabra(arreglo, palabra) {
    arreglo.push(palabra);
}
function buscarPersona(palabra) {
    return nombres.indexOf(palabra);
}
function leerArchivo(rutaArchivo) {
    var archivo = fs.readFileSync(rutaArchivo, 'utf8');
    var lineas = archivo.split('\n');
    lineas = lineas.map(function (linea) { return linea.replace('\r', ''); });
    return lineas;
}
//console.log(leerArchivo('colegios.txt'));
//console.log(leerArchivo('nombres.txt'));
