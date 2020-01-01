let readlineSync = require('readline-sync');
let usuarioIngresado = readlineSync.question('ingrese su nombre de usuario: ');
let contraseñaIngresada = readlineSync.question('ingrese su clave: ');
usuario = "juan";
contraseña = "clavejuan";

if ((usuarioIngresado == usuario) && (contraseñaIngresada == contraseña)){
    console.log('Bienvenido Juan');
} else {
    console.log('su usuario o contraseña son incorrectas');
}