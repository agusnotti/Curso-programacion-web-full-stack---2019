let rl = require('readline-sync');
let claveIngresada;
let clave = 'eureka';
let contador = 0;

while (claveIngresada != clave && contador < 3){
    contador++;
    claveIngresada = rl.question('ingrese clave ');
    if (claveIngresada != clave){
    console.log('su clave es incorrecta.');
    }
}
if (claveIngresada == clave){
    console.log('clave correcta ');
} else {
    console.log('cuenta bloqueada ');    
}

