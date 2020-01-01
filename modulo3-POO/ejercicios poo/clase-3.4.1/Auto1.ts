import Auto from "./Auto";
import Movil from "./Movil";
import Vehiculo from "./Vehiculo"

export default abstract class Auto1 extends Movil implements Auto, Vehiculo{
    
    protected marca:string;
    protected modelo:number;
    protected dominio:string;
    cantidadCombustible:number;
    
    constructor(marca:string, modelo:number, dominio:string, velocidad:number){
        super(velocidad);
        this.marca=marca;
        this.modelo=modelo;
        this.dominio=dominio;
                
    }
    abstract acelerar():void;

    cargarCombustible():void{};

    protected abstract getVelocidad():number; 



}
