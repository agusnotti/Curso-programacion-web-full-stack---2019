//Hacer la función sufijo que indica si una palabra es sufijo de otra palabra/texto. 

let rl = require('readline-sync');
let texto = rl.question('ingrese texto ');
let sufijo = rl.question('ingrese sufijo ');

esSufijo(texto, sufijo);

function esSufijo(texto, sufijoBuscado){
    if (texto.substring((texto.length - sufijoBuscado.length), texto.length) == sufijoBuscado){
        console.log(sufijoBuscado+ ' es sufijo del texto ingresado');
    } else{
        console.log(sufijoBuscado+ ' NO es sufijo del texto ingresado');
    }
}