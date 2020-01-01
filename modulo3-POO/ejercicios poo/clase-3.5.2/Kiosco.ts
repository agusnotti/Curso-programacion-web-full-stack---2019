import Stock from "./Stock";
import Ventas from "./Ventas";
import Item from "./Item";
//import * as fs from 'fs';

export default class Kiosco {
    private nombre: string;
    private direccion: string;
    private propietario: string;
    private listadoStock: Stock[];
    private listadoVentas: Ventas[];

    public constructor(nombre: string, direccion: string, propietario: string){
        this.nombre=nombre;
        this.direccion=direccion;
        this.propietario=propietario;
        this.listadoStock= new Array();
        this.listadoVentas=new Array();
    }

    public getNombre(): string{
        return this.nombre;
    }
    public getDireccion(): string{
        return this.direccion;
    }
    public getPropietario(): string{
        return this.propietario;
    }
    public setNombre(nombre: string): void{
        this.nombre=nombre;
    } 
    public setDireccion(direccion:string): void{
        this.direccion=direccion;
    }
    public setPropietario(propietario: string): void{
        this.propietario=propietario;
    } 
    public addItemStock(item:Item, cantidad: number): void{
        let estaItem: boolean = false;
        for (let i = 0; i < this.listadoStock.length; i++) {
            if(this.listadoStock[i].getItem() == item){
                this.listadoStock[i].sumarCantidad(cantidad);
                estaItem = true;
            }
        }
        if(estaItem == false){
            let stock = new Stock(cantidad, item);
            this.listadoStock.push(stock);
        }
    }
    public addItemVentas(item:Item, cantidad: number): void{
        let estaItem: boolean = false;
        for (let i = 0; i < this.listadoVentas.length; i++) {
            if(this.listadoVentas[i].getItem() == item){
                this.listadoVentas[i].sumarCantidad(cantidad);
                estaItem = true;
            }
        }
        if(estaItem == false){
            let ventas = new Ventas(cantidad, item);
            this.listadoVentas.push(ventas);
        }
    }
    public venderItem(item:Item, cantidad: number): void{
        for (let i = 0; i < this.listadoStock.length; i++) {
            if(this.listadoStock[i].getItem() == item){
                if (this.listadoStock[i].getCantidad() >= cantidad){
                    this.listadoStock[i].restarCantidad(cantidad);
                    this.addItemVentas(item, cantidad);
                }
            }
        }
    }
    /*public cargarStockDesdeArchivo(ruta:string): void{
        //se supone que el archivo de texto tiene tipo, marca, precio, cantidad
        //ej: detergente,ala,10,6
        //``  papel,cachodito,2,20
        let lineas:string[] = this.leerArchivo(ruta);
        for (let i = 0; i < lineas.length; i++) {
            let data:string[] = lineas[i].split(',');
            let item: Item = new Item(data[0],data[1],parseInt(data[2]));
            this.addItemStock(item, parseInt(data[3]));
        }
    }*/

    public descargarArchivoVentas():void{
        //se supone que el archivo de texto tiene tipo, marca, precio, cantidad
        //ej: detergente,ala,10,6
        //``  papel,cachodito,2,20
        let lineas:string = "";
        for (let i = 0; i < this.listadoVentas.length; i++) {
            lineas += this.listadoVentas[i].getItem().getTipo() + ',';
            lineas += this.listadoVentas[i].getItem().getMarca() + ',';
            lineas += this.listadoVentas[i].getItem().getPrecio() + ',';

            if((this.listadoVentas.length - 1) == i){
                lineas += this.listadoVentas[i].getCantidad() + '';
            } else {
                lineas += this.listadoVentas[i].getCantidad() + '\n';
            }            
        }

        this.guardarArchivo(lineas);
    }

    
​
    /*private leerArchivo(rutaArchivo: string): string[] {
        let archivo: string = fs.readFileSync(rutaArchivo, 'utf8');
    
        let lineas: string[] = archivo.split('\n');
        lineas = lineas.map(linea => linea.replace('\r', ''));
​
        return lineas;
    }*/

    private guardarArchivo(contenido:string):void{
        //codigo para guardar un archivo
    }
}