"use strict";
exports.__esModule = true;
var paletaColores = require("./node_modules/@ant-design/colors");
var readlinesync = require("./node_modules/readline-sync");
var colorIngresado = readlinesync.question('ingrese un color (red, volcano, gold, yellow, lime, green, cyan, blue, geekblue, purple, magenta, grey)');
var subcolor = obtenerColorAleatorio(paletaColores[colorIngresado]);
console.log(subcolor);
function obtenerColorAleatorio(colores) {
    var i = Math.floor(Math.random() * (colores.length));
    var color = colores[i];
    return color;
}
