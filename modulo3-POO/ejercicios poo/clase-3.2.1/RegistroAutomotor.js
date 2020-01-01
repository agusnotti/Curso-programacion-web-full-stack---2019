"use strict";
exports.__esModule = true;
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor() {
        this.listadoAutos = new Array();
    }
    RegistroAutomotor.prototype.buscarAutoPorPatente = function (patente) {
        for (var i = 0; i < this.listadoAutos.length; i++) {
            if (this.listadoAutos[i].getPatente() == patente) {
                return this.listadoAutos[i];
            }
        }
        return null;
    };
    RegistroAutomotor.prototype.borrarAuto = function (auto) {
        var indice = this.listadoAutos.indexOf(auto);
        if (indice != -1) {
            this.listadoAutos.splice(indice, 1);
        }
    };
    RegistroAutomotor.prototype.actualizarAuto = function (auto) {
        var autoViejo = this.buscarAutoPorPatente(auto.getPatente());
        if (autoViejo != null) {
            var indice = this.listadoAutos.indexOf(autoViejo);
            if (indice != -1) {
                this.listadoAutos[indice] = auto;
            }
        }
    };
    RegistroAutomotor.prototype.darAltaAuto = function (auto) {
        this.listadoAutos.push(auto);
    };
    RegistroAutomotor.prototype.getListadoAutos = function () {
        return this.listadoAutos;
    };
    return RegistroAutomotor;
}());
exports["default"] = RegistroAutomotor;
