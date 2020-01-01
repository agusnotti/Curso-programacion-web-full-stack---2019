import Vehiculo from "./Vehiculo";

export default class Camioneta extends Vehiculo{
    
    public constructor(patente: string, modelo:string, anio:number, marca: string, precio:number, capacidadCarga: number){
        super(patente, modelo, anio, marca, precio, 'Camioneta', capacidadCarga);
    }
}