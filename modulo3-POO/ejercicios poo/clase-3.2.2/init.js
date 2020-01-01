"use strict";
exports.__esModule = true;
var Decodificador_1 = require("./Decodificador");
var Televisor_1 = require("./Televisor");
var decodificador = new Decodificador_1["default"](10);
var miTelevisor = new Televisor_1["default"](12, decodificador);
miTelevisor.prenderApagar(); //prendo el tele
console.log(miTelevisor.getCanal());
miTelevisor.cambiarCanal(50);
console.log(miTelevisor.getCanal());
miTelevisor.subirVolumen();
console.log(miTelevisor.getVolumenActual());
console.log("");
console.log(miTelevisor);
