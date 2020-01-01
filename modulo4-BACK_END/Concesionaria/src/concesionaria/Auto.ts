import Vehiculo from "./Vehiculo";

export default class Auto extends Vehiculo{
    
    public constructor(patente: string, modelo:string, anio:number, marca: string, precio:number, capacidadBaul: number){
        super(patente, modelo, anio, marca, precio, 'Auto', capacidadBaul);
    }
}