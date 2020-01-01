"use strict";
exports.__esModule = true;
var Auto_1 = require("./Auto");
var RegistroAutomotor_1 = require("./RegistroAutomotor");
var fs_1 = require("fs");
var registro = new RegistroAutomotor_1["default"]();
var lineas = leerArchivo('info_autos.txt');
for (var i = 0; i < lineas.length; i++) {
    var infoAuto = lineas[i].split(',');
    var auto = new Auto_1["default"](infoAuto[0], infoAuto[1], infoAuto[2], infoAuto[3], infoAuto[4]);
    registro.darAltaAuto(auto);
}
console.log(registro.buscarAutoPorPatente('ABC123'));
var auto2 = new Auto_1["default"]("Ford", "focus", "Nafta", 2010, "AGF133");
registro.darAltaAuto(auto2);
console.log(registro);
function leerArchivo(rutaArchivo) {
    var archivo = fs_1["default"].readFileSync(rutaArchivo, 'utf8');
    var lineas = archivo.split('\n');
    lineas = lineas.map(function (linea) { return linea.replace('\r', ''); });
    return lineas;
}
