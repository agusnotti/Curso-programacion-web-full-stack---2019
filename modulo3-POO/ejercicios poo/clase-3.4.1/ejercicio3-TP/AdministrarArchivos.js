"use strict";
exports.__esModule = true;
var fs = require("fs");
var AdministrarArchivo = /** @class */ (function () {
    function AdministrarArchivo(rutaArchivo) {
        this.rutaArchivo = rutaArchivo;
    }
    AdministrarArchivo.prototype.leerArchivo = function () {
        var archivo = fs.readFileSync(this.rutaArchivo, 'utf8');
        var lineas = archivo.split('\n');
        lineas = lineas.map(function (linea) { return linea.replace('\r', ''); });
        return lineas;
    };
    AdministrarArchivo.prototype.escribirArchivo = function (contenido) {
        fs.writeFile(this.rutaArchivo, contenido, function (err) {
            if (err) {
                console.error(err);
                return;
            }
            console.log("El archivo fue guardado");
        });
    };
    return AdministrarArchivo;
}());
exports["default"] = AdministrarArchivo;
