let readlineSync=require('readline-sync');
let precioUnidad=readlineSync.questionFloat('ingrese precio unitario de fotocopia: ');


console.log('Precio unitario: cantidad entre 100 y 200 fotocopias con 12% de descuento: $', precioUnidad - (precioUnidad*0.12));
console.log('Precio unitario: cantidad entre 201 y 400 fotocopias con 15% de descuento: $', precioUnidad - (precioUnidad*0.15));
console.log('Precio unitario: cantidad mayor a 400 fotocopias con 18% de descuento: $', precioUnidad - (precioUnidad*0.18));


