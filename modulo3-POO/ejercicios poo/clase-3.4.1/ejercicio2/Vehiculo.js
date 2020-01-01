"use strict";
exports.__esModule = true;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca, modelo, anio) {
        this.estaPrendido = false;
        this.velocidad = 0;
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }
    Vehiculo.prototype.prender = function () {
        this.estaPrendido = true;
    };
    Vehiculo.prototype.apagar = function () {
        this.estaPrendido = false;
    };
    Vehiculo.prototype.getMarca = function () {
        return this.marca;
    };
    Vehiculo.prototype.getModelo = function () {
        return this.modelo;
    };
    Vehiculo.prototype.getAnio = function () {
        return this.anio;
    };
    Vehiculo.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    return Vehiculo;
}());
exports["default"] = Vehiculo;
