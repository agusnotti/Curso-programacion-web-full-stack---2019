let readlineSync=require('readline-sync');
let clave;
let cantIntentos = 1;

while (cantIntentos <= 3 && clave != 'eureka'){
    cantIntentos++;
    clave = readlineSync.question('ingrese su clave ');
    
    if (clave != 'eureka'){
        console.log('Clave incorrecta. vuelva a intentarlo');  
    }
} 
if (clave == 'eureka'){
    console.log('la clave es correcta');
} else {
    console.log('clave incorrecta. cuenta bloqueda');
}

