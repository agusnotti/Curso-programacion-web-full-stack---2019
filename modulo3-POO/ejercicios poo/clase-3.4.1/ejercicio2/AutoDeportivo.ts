import Vehiculo from "./Vehiculo";

export default class AutoDeportivo extends Vehiculo{
    
    public constructor(marca: string, modelo:string, anio:number){
        super(marca, modelo, anio);
    }
    
    public acelerar(): void {
        this.velocidad += 50;
    }
    public frenar(): void {
        this.velocidad -= 50;
    }     
}