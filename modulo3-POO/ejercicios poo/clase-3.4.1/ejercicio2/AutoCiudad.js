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
var AutoCiudad = /** @class */ (function (_super) {
    __extends(AutoCiudad, _super);
    function AutoCiudad(marca, modelo, anio) {
        return _super.call(this, marca, modelo, anio) || this;
    }
    AutoCiudad.prototype.acelerar = function () {
        this.velocidad += 10;
    };
    AutoCiudad.prototype.frenar = function () {
        this.velocidad -= 10;
    };
    return AutoCiudad;
}(Vehiculo_1["default"]));
exports["default"] = AutoCiudad;
