let readlineSync=require('readline-sync');
let posicionLlegada=readlineSync.questionInt('ingrese posicion de llegada:');

if (posicionLlegada == 1){
    console.log('Medalla de Oro');
} else if (posicionLlegada == 2){
    console.log('Medalla de Plata');
} else if (posicionLlegada == 3){
    console.log('Medalla de Bronce');
} else {
    console.log('certificado de participacion');
}