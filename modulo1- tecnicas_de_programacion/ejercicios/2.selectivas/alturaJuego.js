let readlineSync=require('readline-sync');
let altura=readlineSync.question('ingrese su altura en metros: ');

if (altura >= 1.30){
    console.log('¡¡¡puede ingresar a la montaña rusa!!!');
} else {
    console.log('no puede ingresar al juego :(');
}
