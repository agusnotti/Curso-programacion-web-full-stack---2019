"use strict";
exports.__esModule = true;
var Item = /** @class */ (function () {
    function Item(tipo, marca, precio) {
        this.tipo = tipo;
        this.marca = marca;
        this.precio = precio;
    }
    Item.prototype.getTipo = function () {
        return this.tipo;
    };
    Item.prototype.getMarca = function () {
        return this.marca;
    };
    Item.prototype.getPrecio = function () {
        return this.precio;
    };
    Item.prototype.setTipo = function (tipo) {
        this.tipo = tipo;
    };
    Item.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Item.prototype.setPrecio = function (precio) {
        this.precio = precio;
    };
    return Item;
}());
exports["default"] = Item;
