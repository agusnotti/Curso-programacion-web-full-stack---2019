/* Desarrolle un algoritmo que, de acuerdo a la altura de una persona, decida si puede entrar a 
un juego en un parque de diversiones
Para poder subirse a la montaña rusa la persona debe medir 1.30 mts. o más */

let rl = require('readline-sync');
let altura = rl.questionFloat('ingrese su altura (en cm)');
let alturaPermitida = 130;

if (altura <= alturaPermitida){
    console.log('altura no permitida. no puede ingresar ');
} else {
    console.log('puede ingresar ');
}
