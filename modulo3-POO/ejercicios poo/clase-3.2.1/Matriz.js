"use strict";
exports.__esModule = true;
var Matriz = /** @class */ (function () {
    function Matriz(cantidadFilas, cantidadColumnas) {
        this.cantidadFilas = cantidadFilas;
        this.cantidadColumnas = cantidadColumnas;
        this.matriz = new Array(cantidadFilas);
        for (var i = 0; i < this.matriz.length; i++) {
            this.matriz[i] = new Array(cantidadColumnas);
        }
    }
    Matriz.prototype.getCantidadFilas = function () {
        return this.cantidadFilas;
    };
    Matriz.prototype.getCantidadColumnas = function () {
        return this.cantidadColumnas;
    };
    Matriz.prototype.getDato = function (fila, columna) {
        if (fila <= this.cantidadFilas && columna <= this.cantidadColumnas) {
            return this.matriz[fila][columna];
        }
        else {
            return -1;
        }
    };
    Matriz.prototype.insertarDato = function (dato, fila, columna) {
        if (fila <= this.cantidadFilas && columna <= this.cantidadColumnas) {
            this.matriz[fila][columna] = dato;
        }
    };
    Matriz.prototype.actualizarDato = function (dato, fila, columna) {
        this.insertarDato(dato, fila, columna);
    };
    Matriz.prototype.getDatosMatriz = function () {
        for (var i = 0; i < this.cantidadFilas; i++) {
            var fila = "";
            for (var j = 0; j < this.cantidadColumnas; j++) {
                fila += this.matriz[i][j] + " | ";
            }
            console.log(fila);
        }
    };
    return Matriz;
}());
exports["default"] = Matriz;
