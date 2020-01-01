"use strict";
exports.__esModule = true;
var AdministrarArchivos_1 = require("./AdministrarArchivos");
var Camioneta_1 = require("./Camioneta");
var AutoDeportivo_1 = require("./AutoDeportivo");
var AutoCiudad_1 = require("./AutoCiudad");
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor() {
        this.adminitradorArchivo = new AdministrarArchivos_1["default"]('listadoAutos.txt');
        this.vehiculos = new Array();
    }
    RegistroAutomotor.prototype.agregarVehiculo = function (vehiculo) {
        this.vehiculos.push(vehiculo);
    };
    RegistroAutomotor.prototype.obtenerVehiculo = function (patente) {
        for (var i = 0; i < this.vehiculos.length; i++) {
            if (this.vehiculos[i].getPatente() == patente) {
                return this.vehiculos[i];
            }
        }
        return null;
    };
    RegistroAutomotor.prototype.borrarVehiculo = function (vehiculo) {
        var i = this.vehiculos.indexOf(vehiculo);
        if (i != -1) {
            this.vehiculos.splice(i, 1);
        }
    };
    RegistroAutomotor.prototype.completarRegistroDesdeArchivo = function () {
        var lineas = this.adminitradorArchivo.leerArchivo();
        for (var i = 0; i < lineas.length; i++) {
            var infoAuto = lineas[i].split(',');
            if (infoAuto[0] == "Camioneta") {
                var camioneta = new Camioneta_1["default"](infoAuto[1], infoAuto[2], parseInt(infoAuto[3]), infoAuto[4]);
                this.agregarVehiculo(camioneta);
            }
            else if (infoAuto[0] == "AutoDeportivo") {
                var autoDeportivo = new AutoDeportivo_1["default"](infoAuto[1], infoAuto[2], parseInt(infoAuto[3]), infoAuto[4]);
                this.agregarVehiculo(autoDeportivo);
            }
            else if (infoAuto[0] == "AutoCiudad") {
                var autoCiudad = new AutoCiudad_1["default"](infoAuto[1], infoAuto[2], parseInt(infoAuto[3]), infoAuto[4]);
                this.agregarVehiculo(autoCiudad);
            }
        }
    };
    RegistroAutomotor.prototype.guardarArchivo = function () {
        var lineas = "";
        for (var i = 0; i < this.vehiculos.length; i++) {
            if (i < this.vehiculos.length - 1) {
                lineas += this.vehiculos[i].getTipoVehiculo() + "," + this.vehiculos[i].getMarca() + ',' + this.vehiculos[i].getModelo() + "," + this.vehiculos[i].getAnio() + "," + this.vehiculos[i].getPatente() + "\n";
            }
            else {
                lineas += this.vehiculos[i].getTipoVehiculo() + "," + this.vehiculos[i].getMarca() + ',' + this.vehiculos[i].getModelo() + "," + this.vehiculos[i].getAnio() + "," + this.vehiculos[i].getPatente();
            }
        }
        this.adminitradorArchivo.escribirArchivo(lineas);
    };
    return RegistroAutomotor;
}());
exports["default"] = RegistroAutomotor;
