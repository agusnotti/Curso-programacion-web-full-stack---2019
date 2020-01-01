import Vehiculo from "./Vehiculo";

export default class AutoDeportivo extends Vehiculo{
    
    public constructor(marca: string, modelo:string, anio:number, patente: string){
        super("AutoDeportivo",marca, modelo, anio, patente);
    }
    
    public acelerar(): void {
        this.velocidad += 50;
    }
    public frenar(): void {
        this.velocidad -= 50;
    }     
}