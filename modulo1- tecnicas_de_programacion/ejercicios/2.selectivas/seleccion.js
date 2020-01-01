let readlineSync=require('readline-sync');
let numero=readlineSync.question('ingrese un numero ');

if (numero<20){
    console.log('shell');
} else {
        if(numero==20){
        console.log('ypf');
        } else {
            console.log('puma');
        }
    }
