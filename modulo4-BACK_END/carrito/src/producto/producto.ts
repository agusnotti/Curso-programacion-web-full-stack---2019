export class Producto {
    private producto: string;
    private precio: number;
    private descripcion: string;
    private iva: number;

    public constructor(producto: string, precio: number, descripcion: string, iva: number) {
        this.producto = producto;
        this.precio = precio;
        this.descripcion = descripcion;
        this.iva = iva;
    }

    public getNombreProducto(): string {
        return this.producto;
    }
    
    public getPrecio(): number {
        return this.precio;
    }
    public getdescripcion(): string {
        return this.descripcion;
    }
    public getIva(): number {
        return this.iva;
    }
}