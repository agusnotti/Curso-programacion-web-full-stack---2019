"use strict";
exports.__esModule = true;
var Camara = /** @class */ (function () {
    function Camara(camaraFrontalActivada, brillo, zoom) {
        this.camaraFrontalActivada = false;
        this.brillo = 0;
        this.zoom = 0;
    }
    Camara.prototype.sacarFoto = function () {
        console.log("sacar foto....");
    };
    return Camara;
}());
exports["default"] = Camara;
