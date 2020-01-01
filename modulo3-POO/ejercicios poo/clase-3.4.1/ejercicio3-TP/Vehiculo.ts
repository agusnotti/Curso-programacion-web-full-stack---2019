export default abstract class Vehiculo{
    protected estaPrendido: boolean;
    protected velocidad: number;
    protected marca: string;
    protected modelo: string;
    protected anio: number;
    protected patente: string;
    protected tipoVehiculo: string;
    
    public constructor(tipoVehiculo: string, marca: string, modelo:string, anio:number, patente: string){
        this.estaPrendido=false;
        this.velocidad = 0;
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.patente = patente;
        this.tipoVehiculo = tipoVehiculo;
    }

    public prender():void{
        this.estaPrendido=true;
    }
    public apagar():void{
        this.estaPrendido=false;
    }
    public getMarca(): string{
        return this.marca;
    }
    public getModelo(): string{
        return this.modelo;
    }
    public getAnio(): number{
        return this.anio;
    }
    public getVelocidad(): number{
        return this.velocidad;
    }
    public getPatente():string{
        return this.patente;
    }
    public getTipoVehiculo(): string{
        return this.tipoVehiculo;
    }
    abstract acelerar(): void;

    abstract frenar(): void;

}