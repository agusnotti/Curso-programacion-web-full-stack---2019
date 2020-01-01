let readlineSync=require('readline-sync');
let numNuevo;

while (numNuevo != 0) {
    numNuevo = readlineSync.questionInt('ingrese un numero ');
    if (numNuevo == 0) {
        console.log('el numero es cero')
    } else if (numNuevo % 2 == 0){
        console.log('el numero es par');
    } else {
        console.log('el numero es impar');
    }
}
    /*if (numNuevo == 0);
    console.log('el numero es cero');*/