"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Vehiculo_1 = require("./Vehiculo");
var Camioneta = /** @class */ (function (_super) {
    __extends(Camioneta, _super);
    function Camioneta(marca, modelo, anio, patente) {
        return _super.call(this, "Camioneta", marca, modelo, anio, patente) || this;
    }
    Camioneta.prototype.acelerar = function () {
        this.velocidad += 30;
    };
    Camioneta.prototype.frenar = function () {
        this.velocidad -= 30;
    };
    return Camioneta;
}(Vehiculo_1["default"]));
exports["default"] = Camioneta;
