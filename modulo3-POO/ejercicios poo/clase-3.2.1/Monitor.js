"use strict";
//estado: encendido/apagado, brilloActual, contrasteActual
//funcionalidades: encenderApagarMonitor, aumentarBrillo, disminuirBrillo, aumentarContraste, dsminuirContraste
exports.__esModule = true;
var Monitor = /** @class */ (function () {
    function Monitor() {
        this.estaEncendido = false;
        this.brilloActual = 25;
        this.contrasteActual = 30;
    }
    Monitor.prototype.encenderApagarMonitor = function () {
        if (this.estaEncendido) {
            this.estaEncendido = false;
        }
        else {
            this.estaEncendido = true;
        }
    };
    Monitor.prototype.aumentarBrillo = function () {
        this.brilloActual = this.brilloActual + 1;
    };
    Monitor.prototype.disminuirBrillo = function () {
        this.brilloActual = this.brilloActual - 1;
    };
    Monitor.prototype.aumentarContraste = function () {
        this.contrasteActual = this.contrasteActual + 1;
    };
    Monitor.prototype.disminuirContraste = function () {
        this.contrasteActual = this.contrasteActual - 1;
    };
    return Monitor;
}());
exports["default"] = Monitor;
