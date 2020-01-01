let rl=require('readline-sync');

let nombre = leerTextoDesdeConsola('ingrese su nombre ');
let apellido = leerTextoDesdeConsola('ingrese su apellido ');
console.log('bienvenido '+ nombre + ' ' + apellido);

function leerTextoDesdeConsola(mostrar){
    
    return rl.question(mostrar);

}
