let readlineSync=require('readline-sync');
let precioProducto=readlineSync.question('ingrese precio del producto: ');
let cantidad=readlineSync.question('ingrese la cantidad: ');
let precioCompra = precioProducto*cantidad
let descuento = precioCompra*0.1
let precioDescuento=precioCompra - descuento

if (precioCompra >= 1000) {
    console.log('Precio a pagar, con descuento del 10%: ', precioDescuento);
} else {
    console.log('Precio a pagar, sin descuento: ', precioCompra);
}