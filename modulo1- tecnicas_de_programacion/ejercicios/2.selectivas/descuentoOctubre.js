let readlineSync = require('readline-sync');
let precioUnitario = readlineSync.questionInt('Ingrese precio del producto: '); 
let cantidad = readlineSync.questionInt('Ingrese cantidad del producto: ');
let mesCompra = readlineSync.question('Ingrese mes de su compra: ');
let precioFinal = precioUnitario*cantidad;
let descuento = precioFinal*0.15;
let precioDescuento = precioFinal - descuento;
let mesCumpleaños = 'octubre';

if (mesCompra == mesCumpleaños){
    console.log('Por el mes de Octubre,su compra tiene un descuento del 15%. El total a pagar es ', precioDescuento);
} else {
    console.log('Usted no tiene descuento. El total a pagar es ', precioFinal);
}

