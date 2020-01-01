"use strict";
exports.__esModule = true;
var auto_1 = require("./auto");
var miAuto = new auto_1["default"]("fiat");
var segundoAuto = new auto_1["default"]("chevrolet");
miAuto.imprimirAuto();
console.log(miAuto);
segundoAuto.imprimirAuto();
console.log(segundoAuto);
