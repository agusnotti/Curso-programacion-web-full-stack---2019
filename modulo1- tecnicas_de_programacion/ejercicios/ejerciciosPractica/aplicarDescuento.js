/*Desarrolle un algoritmo que diga el precio de una compra.
La compra se compone del precio del producto y la cantidad
Si el cliente gasta más de $1000 debemos aplicarle un descuento del 10%*/

let rl = require('readline-sync');
let precioProducto = rl.questionInt('ingrese precio unitario del producto $');
let cantidad = rl.questionInt('ingrese cantidad ');
let precioCompra = precioProducto*cantidad;
let precioDescuento;

if(precioCompra > 1000){
    precioDescuento = precioCompra - (precioCompra*0.1);
    console.log ('El total a pagar, con descuento del 10%, es $'+ precioDescuento);
} else {
    console.log ('Total a pagar $ '+precioCompra);
}