export default abstract class Vehiculo{    
    protected marca: string;
    protected patente: string;
    protected modelo: string;
    protected anio: number;
    protected precio: number;
    protected tipoVehiculo: string;
    protected capacidad: number;

    public constructor(patente: string, modelo:string, anio:number, marca: string, precio:number, tipoVehiculo: string, capacidad: number){
        this.patente = patente;
        this.modelo = modelo;
        this.anio = anio;
        this.marca = marca;
        this.precio = precio;
        this.tipoVehiculo = tipoVehiculo;
        this.capacidad = capacidad;
    }

    public getPatente():string{
        return this.patente;
    }
    public getModelo(): string{
        return this.modelo;
    }
    public getAnio(): number{
        return this.anio;
    }
    public getMarca(): string{
        return this.marca;
    }
    public getPrecio(): number{
        return this.precio;
    }
    public getTipoVehiculo(): string{
        return this.tipoVehiculo;
    }
    public getCapacidad(): number{
        return this.capacidad;
    }
}