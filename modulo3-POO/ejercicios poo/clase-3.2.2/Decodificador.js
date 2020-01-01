"use strict";
exports.__esModule = true;
var Decodificador = /** @class */ (function () {
    function Decodificador(canalActual) {
        this.canalActual = canalActual;
    }
    Decodificador.prototype.getCanal = function () {
        return this.canalActual;
    };
    Decodificador.prototype.setCanal = function (canal) {
        this.canalActual = canal;
    };
    Decodificador.prototype.subirCanal = function () {
        this.canalActual++;
    };
    Decodificador.prototype.bajarCanal = function () {
        this.canalActual--;
    };
    return Decodificador;
}());
exports["default"] = Decodificador;
