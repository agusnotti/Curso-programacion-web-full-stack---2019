"use strict";
exports.__esModule = true;
var Stock = /** @class */ (function () {
    function Stock(cantidad, item) {
        this.cantidad = cantidad;
        this.item = item;
    }
    Stock.prototype.getCantidad = function () {
        return this.cantidad;
    };
    Stock.prototype.getItem = function () {
        return this.item;
    };
    Stock.prototype.setCantidad = function (cantidad) {
        this.cantidad = cantidad;
    };
    Stock.prototype.setItem = function (item) {
        this.item = item;
    };
    Stock.prototype.sumarCantidad = function (cantidad) {
        this.cantidad += cantidad;
    };
    Stock.prototype.restarCantidad = function (cantidad) {
        this.cantidad -= cantidad;
    };
    return Stock;
}());
exports["default"] = Stock;
