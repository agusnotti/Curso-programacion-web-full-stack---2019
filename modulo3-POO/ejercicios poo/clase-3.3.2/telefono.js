"use strict";
exports.__esModule = true;
var Telefono = /** @class */ (function () {
    function Telefono(estaPrendido, bateriaActual, linternaPrendida) {
        this.estaPrendido = false;
        this.bateriaActual = 50;
        this.linternaPrendida = false;
    }
    Telefono.prototype.mandarMensaje = function (mensaje, numero) {
        console.log(mensaje + " al numero " + numero);
    };
    Telefono.prototype.hacerLlamada = function () {
        console.log("llamando...");
    };
    Telefono.prototype.prenderApagar = function () {
        if (this.estaPrendido) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    };
    return Telefono;
}());
exports["default"] = Telefono;
