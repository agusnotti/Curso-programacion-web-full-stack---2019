"use strict";
exports.__esModule = true;
var Smartphone = /** @class */ (function () {
    function Smartphone() {
        this.estaPrendido = false;
    }
    Smartphone.prototype.prender = function () {
        this.estaPrendido = true;
    };
    Smartphone.prototype.apagar = function () {
        this.estaPrendido = false;
    };
    Smartphone.prototype.llamar = function (numero) {
        console.log('llamar al numero ' + numero);
    };
    return Smartphone;
}());
exports["default"] = Smartphone;
