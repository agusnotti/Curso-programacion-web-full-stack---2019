import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { Producto } from './producto';

@Controller('productos')
export class ProductoController {
    constructor (private productoService: ProductoService) {}
    @Get()
    public getProductos() : string {
        return this.productoService.getProductos();
    } 
    @Get(':id')
    public getProducto(@Param('id') linea) : string {
        return this.productoService.getProducto(linea);
    }
    @Post()
    public addProducto(@Body() producto : any) : string {
        console.log(`llega a controller A ${producto.producto}-${producto.precio}-${producto.descripcion}-${producto.iva}`)
        return this.productoService.addProducto(producto);
    }
    @Put()
    public updateProducto(@Body() producto : any) : string {
        console.log(`llega a controller M ${producto.producto}-${producto.precio}-${producto.descripcion}-${producto.iva}`)
        return this.productoService.setProducto(producto);
    } 
    @Delete()
    public deleteProducto(@Body() producto : any) : string {
        console.log(`llega a controller B ${producto.producto}-${producto.precio}-${producto.descripcion}-${producto.iva}`)
        return this.productoService.removeProducto(producto);
    } 
}
