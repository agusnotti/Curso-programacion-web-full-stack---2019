import Vehiculo from "./Vehiculo";

export default class AutoCiudad extends Vehiculo{
    
    public constructor(marca: string, modelo:string, anio:number, patente: string){
        super("AutoCiudad",marca, modelo, anio, patente);
    }
    
    public acelerar(): void {
        this.velocidad += 10;
    }
    public frenar(): void {
        this.velocidad -= 10;
    }     
}