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
var Stock_1 = require("./Stock");
var Ventas = /** @class */ (function (_super) {
    __extends(Ventas, _super);
    function Ventas(cantidad, item) {
        return _super.call(this, cantidad, item) || this;
    }
    Ventas.prototype.calcularGanancias = function () {
        var ganancias = this.cantidad * this.item.getPrecio();
        return ganancias;
    };
    return Ventas;
}(Stock_1["default"]));
exports["default"] = Ventas;
