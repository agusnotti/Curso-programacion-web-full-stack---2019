import { Injectable } from '@nestjs/common';
import { readFileSync, appendFileSync, writeFileSync } from 'fs';
import { Producto } from './producto';
  
@Injectable()
export class ProductoService {
    private static readonly CANTIDAD_PRODUCTOS = 20;
    private listaProductos : Producto[];
    private url : string;

    public constructor() { //(url : string) {
        this.url='compras.txt'; //url; 
        this.loadProductos();
    }

    public getProductos() : any {
        return this.listaProductos;
    }
    public getProducto(linea : string) : any {
        let i = -1;
        if (linea == '') return null;
        i=parseInt(linea);
        if (i>=0 || i<this.listaProductos.length)
            return this.listaProductos[i];
        else
            return null;
    }

    public addProducto(prodArg : Producto) : string {
        console.log(`llega a service ${prodArg.getNombreProducto()}-${prodArg.getPrecio()}-${prodArg.getdescripcion()}-${prodArg.getIva()}`)
        const producto = new Producto(prodArg.getNombreProducto(), prodArg.getPrecio(), prodArg.getdescripcion(), prodArg.getIva()); //']);
        this.listaProductos.push(producto);
        this.persistirLista();
        this.mostrarLista();
        return "ok";
    }

    public setProducto(prodArg : Producto) : string {
        const producto = new Producto(prodArg['producto'], prodArg['precio'],prodArg['descripcion'], prodArg['iva']);
        this.listaProductos[this.obtenerPosicion(producto.getNombreProducto())] = producto;
        this.persistirLista();
        this.mostrarLista();
        return "ok";
    }

    public removeProducto(prodArg : Producto) : string {
        const producto = new Producto(prodArg['producto'], prodArg['precio'],prodArg['descripcion'], prodArg['iva']);
        this.listaProductos.splice(this.obtenerPosicion(producto.getNombreProducto()),1);
        this.persistirLista();
        this.mostrarLista();
        return "ok";
    }

    private loadProductos() {
        this.listaProductos = [];
        if (this.url != '') {
            console.log(`Lectura de data/${this.url}`);
            let f = readFileSync(`data/${this.url}`, 'utf8');
            const d = f.split('\r\n').map(d => d.split(','));
            for (let j=0; j<d.length; j++) {
                if (d[j][0]!="") {
                    console.log(d[j].toString());
                    let producto = new Producto(`${d[j][0]}`,parseInt(d[j][1]),`${d[j][2]}`,parseFloat(d[j][3]));
                    this.listaProductos.push(producto);
                }
            }
        } else {
            console.log(`Generacion de data/${this.url}`);
            for (let i=0; i<ProductoService.CANTIDAD_PRODUCTOS; i++) {
                let precio = Math.floor(Math.random()*100);
                let tasiva = Math.floor(Math.random()*3);
                let producto = new Producto(`producto_${i}`,precio,`descripcion_${i}`,tasiva * 10.5);
                console.log(producto.toString());
                this.listaProductos.push(producto);
            }
        }
    }

    private mostrarLista() {
        console.log('Listado:');
        let p : Producto;
        for (p of this.listaProductos) {
            console.log(p.toString());
        }
    }
    private persistirLista() {
        let p : Producto;
        writeFileSync(`data/${this.url}`, '', 'utf8');
        for (p of this.listaProductos){
            appendFileSync(`data/${this.url}`,`\r\n${p.getNombreProducto()},${p.getPrecio()},${p.getdescripcion()},${p.getIva()}`,'utf8');
        }
    }
    private obtenerPosicion(producto : string) : number {
        for (let i=0; i<this.listaProductos.length; i++) {
            if (this.listaProductos[i].getNombreProducto()==producto)
                return i;
        }
        return -1;
    }
}