import Vehiculo from "./Vehiculo";

export default class Camioneta extends Vehiculo{
    
    public constructor(marca: string, modelo:string, anio:number, patente: string){
        super("Camioneta",marca, modelo, anio, patente);
    }
    
    public acelerar(): void {
        this.velocidad += 30;
    }
    public frenar(): void {
        this.velocidad -= 30;
    }     
}