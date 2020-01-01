"use strict";
exports.__esModule = true;
var Auto = /** @class */ (function () {
    function Auto(marca, modelo, tipoCombustible, ano, patente) {
        this.estaPrendido = false;
        this.velocidadActual = 0;
        this.marca = marca;
        this.modelo = modelo;
        this.tipoCombustible = tipoCombustible;
        this.ano = ano;
        this.patente = patente;
    }
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Auto.prototype.getModelo = function () {
        return this.modelo;
    };
    Auto.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Auto.prototype.getTipoCombustible = function () {
        return this.tipoCombustible;
    };
    Auto.prototype.setTipoCombustible = function (tipoCombustible) {
        this.tipoCombustible = tipoCombustible;
    };
    Auto.prototype.getAno = function () {
        return this.ano;
    };
    Auto.prototype.setAno = function (ano) {
        this.ano = ano;
    };
    Auto.prototype.getPatente = function () {
        return this.patente;
    };
    Auto.prototype.setPatente = function (patente) {
        this.patente = patente;
    };
    Auto.prototype.prenderApagar = function () {
        if (this.estaPrendido) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    };
    Auto.prototype.acelerar = function () {
        this.velocidadActual = this.velocidadActual + 1;
    };
    Auto.prototype.frenar = function () {
        this.velocidadActual = this.velocidadActual - 1;
    };
    return Auto;
}());
exports["default"] = Auto;
