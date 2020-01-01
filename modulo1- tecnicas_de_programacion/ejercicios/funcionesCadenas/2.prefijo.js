//Hacer la función prefijo que indica si una palabra es prefijo de otra palabra/texto

let rl = require('readline-sync');
let texto = rl.question('ingrese texto ');
let prefijo = rl.question('ingrese sufijo ');

esPrefijo(texto,prefijo);

function esPrefijo(texto, prefijo){
    if (texto.substring(0, prefijo.length)==prefijo){
        console.log(prefijo + ' es prefijo del texto');   
    } else {
        console.log(prefijo + ' NO es prefijo del texto'); 
    }
}