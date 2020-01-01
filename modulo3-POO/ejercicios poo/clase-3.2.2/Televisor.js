"use strict";
exports.__esModule = true;
var Televisor = /** @class */ (function () {
    function Televisor(volumenActual, decodificador) {
        this.prendido = false;
        this.volumenActual = volumenActual;
        this.decodificador = decodificador;
    }
    Televisor.prototype.prenderApagar = function () {
        if (this.prendido) {
            this.prendido = false;
        }
        else {
            this.prendido = true;
        }
    };
    Televisor.prototype.getCanal = function () {
        return this.decodificador.getCanal();
    };
    Televisor.prototype.getVolumenActual = function () {
        return this.volumenActual;
    };
    Televisor.prototype.subirVolumen = function () {
        this.volumenActual++;
    };
    Televisor.prototype.bajarVolumen = function () {
        this.volumenActual--;
    };
    Televisor.prototype.cambiarCanal = function (canal) {
        this.decodificador.setCanal(canal);
    };
    Televisor.prototype.subirCanal = function () {
        this.decodificador.subirCanal();
    };
    Televisor.prototype.bajarCanal = function () {
        this.decodificador.bajarCanal();
    };
    return Televisor;
}());
exports["default"] = Televisor;
