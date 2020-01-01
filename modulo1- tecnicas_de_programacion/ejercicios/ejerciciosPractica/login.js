/* Desarrolle un algoritmo que permita loguearse (registrarse) a un sistema, ingresando un nombre de usuario y la 
contraseña adecuada. 
Considerar que tanto el usuario como la contraseña están formados sólo por letras. 
El sistema deberá validar que el usuario y la contraseña sean correctas, comparándolas con lo que es sistema tiene 
registrado para ese usuario. Tenga en cuenta que el sistema tiene registrado el usuario: Juan y la clave 
claveJuan
 */

let rl = require('readline-sync');
let usuarioIngresado;
let claveIngresada;
let usuario = "juan";
let clave = 'clavejuan';
let intentos = 1;

while (intentos <= 3 && (usuarioIngresado != usuario || claveIngresada != clave)){
    usuarioIngresado = rl.question('ingrese su usuario ');
    claveIngresada = rl.question('ingrese su clave ');

    if (usuarioIngresado == usuario && claveIngresada == clave){
        console.log('bienvenido');
    } else {
        console.log('usuario o clave incorrecta. vuelva a intentarlo');
        
    } 
    intentos++
}
if (usuarioIngresado != usuario || claveIngresada != clave){
    console.log('supero el limite de intentos');
    
}
