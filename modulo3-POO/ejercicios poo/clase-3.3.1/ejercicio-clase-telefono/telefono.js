"use strict";
exports.__esModule = true;
var Telefono = /** @class */ (function () {
    function Telefono(estaPrendido, bateriaActual) {
        this.estaPrendido = false;
        this.bateriaActual = 50;
    }
    Telefono.prototype.mandarMensaje = function () {
        console.log("hola");
    };
    Telefono.prototype.hacerLlamada = function () {
        console.log("llamando");
    };
    Telefono.prototype.prenderApagar = function () {
        if (this.estaPrendido) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    };
    Telefono.prototype.cargarBateria = function () {
        this.bateriaActual = this.bateriaActual + 1;
    };
    return Telefono;
}());
exports["default"] = Telefono;
