"use strict";
exports.__esModule = true;
var Matriz_1 = require("./Matriz");
var matriz1 = new Matriz_1["default"](4, 5);
for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 5; j++) {
        matriz1.insertarDato(i + j, i, j);
    }
}
matriz1.getDatosMatriz();
console.log(matriz1.getCantidadColumnas());
console.log(matriz1.getCantidadFilas());
console.log(matriz1.getDato(1, 3));
matriz1.actualizarDato(10, 1, 3);
matriz1.getDatosMatriz();
