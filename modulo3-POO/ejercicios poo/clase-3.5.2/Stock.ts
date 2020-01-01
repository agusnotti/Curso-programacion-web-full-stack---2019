import Item from "./Item";

export default class Stock{
    protected cantidad: number;
    protected item: Item;

    public constructor(cantidad: number, item: Item){
        this.cantidad=cantidad;
        this.item=item;
    }

    public getCantidad(): number{
        return this.cantidad;
    }
    public getItem(): Item{
        return this.item;
    }
    public setCantidad(cantidad): void{
        this.cantidad=cantidad;
    }
    public setItem(item): void{
        this.item=item;
    }
    public sumarCantidad(cantidad):void{
        this.cantidad += cantidad;
    }
    public restarCantidad(cantidad):void{
        this.cantidad -= cantidad;
    }
}