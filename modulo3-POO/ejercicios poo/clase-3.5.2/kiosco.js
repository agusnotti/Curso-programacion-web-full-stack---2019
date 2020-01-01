"use strict";
exports.__esModule = true;
var Stock_1 = require("./Stock");
var Ventas_1 = require("./Ventas");
//import * as fs from 'fs';
var Kiosco = /** @class */ (function () {
    function Kiosco(nombre, direccion, propietario) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.listadoStock = new Array();
        this.listadoVentas = new Array();
    }
    Kiosco.prototype.getNombre = function () {
        return this.nombre;
    };
    Kiosco.prototype.getDireccion = function () {
        return this.direccion;
    };
    Kiosco.prototype.getPropietario = function () {
        return this.propietario;
    };
    Kiosco.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Kiosco.prototype.setDireccion = function (direccion) {
        this.direccion = direccion;
    };
    Kiosco.prototype.setPropietario = function (propietario) {
        this.propietario = propietario;
    };
    Kiosco.prototype.addItemStock = function (item, cantidad) {
        var estaItem = false;
        for (var i = 0; i < this.listadoStock.length; i++) {
            if (this.listadoStock[i].getItem() == item) {
                this.listadoStock[i].sumarCantidad(cantidad);
                estaItem = true;
            }
        }
        if (estaItem == false) {
            var stock = new Stock_1["default"](cantidad, item);
            this.listadoStock.push(stock);
        }
    };
    Kiosco.prototype.addItemVentas = function (item, cantidad) {
        var estaItem = false;
        for (var i = 0; i < this.listadoVentas.length; i++) {
            if (this.listadoVentas[i].getItem() == item) {
                this.listadoVentas[i].sumarCantidad(cantidad);
                estaItem = true;
            }
        }
        if (estaItem == false) {
            var ventas = new Ventas_1["default"](cantidad, item);
            this.listadoVentas.push(ventas);
        }
    };
    Kiosco.prototype.venderItem = function (item, cantidad) {
        for (var i = 0; i < this.listadoStock.length; i++) {
            if (this.listadoStock[i].getItem() == item) {
                if (this.listadoStock[i].getCantidad() >= cantidad) {
                    this.listadoStock[i].restarCantidad(cantidad);
                    this.addItemVentas(item, cantidad);
                }
            }
        }
    };
    /*public cargarStockDesdeArchivo(ruta:string): void{
        //se supone que el archivo de texto tiene tipo, marca, precio, cantidad
        //ej: detergente,ala,10,6
        //``  papel,cachodito,2,20
        let lineas:string[] = this.leerArchivo(ruta);
        for (let i = 0; i < lineas.length; i++) {
            let data:string[] = lineas[i].split(',');
            let item: Item = new Item(data[0],data[1],parseInt(data[2]));
            this.addItemStock(item, parseInt(data[3]));
        }
    }*/
    Kiosco.prototype.descargarArchivoVentas = function () {
        //se supone que el archivo de texto tiene tipo, marca, precio, cantidad
        //ej: detergente,ala,10,6
        //``  papel,cachodito,2,20
        var lineas = "";
        for (var i = 0; i < this.listadoVentas.length; i++) {
            lineas += this.listadoVentas[i].getItem().getTipo() + ',';
            lineas += this.listadoVentas[i].getItem().getMarca() + ',';
            lineas += this.listadoVentas[i].getItem().getPrecio() + ',';
            if ((this.listadoVentas.length - 1) == i) {
                lineas += this.listadoVentas[i].getCantidad() + '';
            }
            else {
                lineas += this.listadoVentas[i].getCantidad() + '\n';
            }
        }
        this.guardarArchivo(lineas);
    };
    /*private leerArchivo(rutaArchivo: string): string[] {
        let archivo: string = fs.readFileSync(rutaArchivo, 'utf8');
    
        let lineas: string[] = archivo.split('\n');
        lineas = lineas.map(linea => linea.replace('\r', ''));
 ​
        return lineas;
    }*/
    Kiosco.prototype.guardarArchivo = function (contenido) {
        //codigo para guardar un archivo
    };
    return Kiosco;
}());
exports["default"] = Kiosco;
