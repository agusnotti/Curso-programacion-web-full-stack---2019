
export default class Item{
    private tipo: string;
    private marca: string;
    private precio: number;

    public constructor(tipo: string, marca: string, precio: number){
        this.tipo = tipo;
        this.marca=marca;
        this.precio=precio;
    }

    public getTipo():string{
        return this.tipo;
    }
    public getMarca():string{
        return this.marca;
    }
    public getPrecio():number{
        return this.precio;
    }
    public setTipo(tipo: string): void{
        this.tipo=tipo;
    }
    public setMarca(marca: string): void{
        this.marca=marca;
    }
    public setPrecio(precio:number): void{
        this.precio=precio;
    }
}