"use strict";
exports.__esModule = true;
var Auto = /** @class */ (function () {
    function Auto(marca) {
        this.marca = marca;
    }
    Auto.prototype.imprimirAuto = function () {
        console.log(this); //llamado al objeto miAuto/segundoAuto desde la clase
    };
    return Auto;
}());
exports["default"] = Auto;
var miAuto = new Auto("fiat");
var segundoAuto = new Auto("chevrolet");
miAuto.imprimirAuto();
console.log(miAuto);
segundoAuto.imprimirAuto();
console.log(segundoAuto);
