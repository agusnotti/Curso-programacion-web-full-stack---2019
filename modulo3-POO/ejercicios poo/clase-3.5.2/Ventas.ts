import Stock from "./Stock";
import Item from "./Item";

export default class Ventas extends Stock{

    public constructor(cantidad: number, item: Item){
        super(cantidad, item);
    }

    public calcularGanancias():number{
        let ganancias= this.cantidad*this.item.getPrecio();
        return ganancias;
    }
}