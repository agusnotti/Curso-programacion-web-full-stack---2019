import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import Vehiculo from './Vehiculo';
import Camioneta from './Camioneta';
import Auto from './Auto';

@Injectable()
export class ConcesionariaService {
    private vehiculos: Vehiculo[];

    public constructor() {
        this.loadVehiculos();
    }

    public getVehiculos(): Vehiculo[] {
        return this.vehiculos;
    }

    public getVehiculo(index: number): Vehiculo {
        if (index < 0 || index >= this.vehiculos.length)
            return null;
        return this.vehiculos[index];
    }

    public create(vehiculo: any) {
        console.log("VEHICULO: ");
        console.log(vehiculo);
        console.log(typeof vehiculo);
        console.log("----------------");
        
        let patente = vehiculo['patente'];
        let modelo = vehiculo['modelo'];
        let anio = vehiculo['anio'];
        let marca = vehiculo['marca'];
        let precio = vehiculo['precio'];
        let tipoVehiculo = vehiculo['tipoVehiculo'];
        let capacidad = vehiculo['capacidad'];

        if (patente && modelo &&  parseInt(anio) > 0 && marca && parseInt(precio) > 0 && tipoVehiculo && parseInt(capacidad)) {
            let vehiculo:Vehiculo;
            if (tipoVehiculo == 'Camioneta'){
                vehiculo = new Camioneta(patente, modelo, anio, marca, precio, capacidad);
            } else{
                vehiculo = new Auto(patente, modelo, anio, marca, precio, capacidad);   
            }
            this.vehiculos.push(vehiculo);
            console.log(vehiculo);

            let linea = "";
            if(vehiculo.getTipoVehiculo() == 'Camioneta'){
                linea += 'Camioneta';
            } else{
                linea += 'Auto';
            }
            linea += ';' + vehiculo.getPatente() + ";" + vehiculo.getModelo() + ";" + vehiculo.getAnio() + ";" + vehiculo.getMarca() + ";"+ vehiculo.getPrecio() + ";"+ vehiculo.getCapacidad();


            fs.appendFileSync('vehiculos.csv',
                "\n"+ linea);
            return "ok";
        }
        else
            return "parametros incorrectos";
    }

    private loadVehiculos(): void {
        let archivo = fs.readFileSync('vehiculos.csv', 'utf8');

        const elementos = archivo.split('\n').map(p => p.replace('\r', '')).map(p => p.split(';'));

        this.vehiculos = [];
        let vehiculo : Vehiculo;
        for (let i = 0; i < elementos.length; i++) {
            if (elementos[i][0] == "Camioneta"){
                vehiculo = new Camioneta(elementos[i][1],elementos[i][2],parseInt(elementos[i][3]),elementos[i][4],parseInt(elementos[i][5]),parseInt(elementos[i][6]));
            } else {
                vehiculo = new Auto(elementos[i][1],elementos[i][2],parseInt(elementos[i][3]),elementos[i][4],parseInt(elementos[i][5]),parseInt(elementos[i][6]));
            }
            this.vehiculos.push(vehiculo);
        }
    }

    public deleteVehiculo(position: number): boolean {
        let removed = this.vehiculos.splice(position,1);
        return removed.length == 1;
    }

    public editVehiculo(position: number, vehiculo: any): boolean {
        let patente = vehiculo['patente'];
        let modelo = vehiculo['modelo'];
        let anio = vehiculo['anio'];
        let marca = vehiculo['marca'];
        let precio = vehiculo['precio'];
        let tipoVehiculo = vehiculo['tipoVehiculo'];
        let capacidad = vehiculo['capacidad'];

        if (patente && modelo &&  parseInt(anio) > 0 && marca && parseInt(precio) > 0 && tipoVehiculo && parseInt(capacidad) > 0) {
            let veh:Vehiculo;
            if (tipoVehiculo == 'Camioneta'){
                veh = new Camioneta(patente, modelo, anio, marca, precio, capacidad);
            } else{
                veh = new Auto(patente, modelo, anio, marca, precio, capacidad);   
            }
            this.vehiculos[position] = veh;
            console.log(veh);
            return true;
        }
        else
            return false;
    
    }
}