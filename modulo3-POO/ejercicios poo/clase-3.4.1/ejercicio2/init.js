"use strict";
exports.__esModule = true;
var AutoCiudad_1 = require("./AutoCiudad");
var AutoDeportivo_1 = require("./AutoDeportivo");
var Camioneta_1 = require("./Camioneta");
var autoCiudad = new AutoCiudad_1["default"]('ford', 'focus', 2005);
var autoDeportivo = new AutoDeportivo_1["default"]('Audi', 'R8', 2006);
var camineta = new Camioneta_1["default"]('Toyota', 'Hilux', 2009);
console.log("Marca: " + autoCiudad.getMarca() + ", " + "Modelo: " + autoCiudad.getModelo() + ", " + "Año: " + autoCiudad.getAnio());
console.log(autoCiudad.getVelocidad());
autoCiudad.prender();
autoCiudad.acelerar();
console.log(autoCiudad.getVelocidad());
console.log("Marca: " + autoDeportivo.getMarca() + ", " + "Modelo: " + autoDeportivo.getModelo() + ", " + "Año: " + autoDeportivo.getAnio());
console.log(autoDeportivo.getVelocidad());
autoDeportivo.prender();
autoDeportivo.acelerar();
console.log(autoDeportivo.getVelocidad());
