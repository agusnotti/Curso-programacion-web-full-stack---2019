let rl = require('readline-sync');
let texto = rl.question('ingrese texto ');
let sufijoBuscado = rl.question('ingrese sufijo ');

/*  PARA BUSCAR SUFIJO DE UNA FRASE(NO ME SIRVE PARA PALABRAS)
let arreglo = texto.split(' ');
console.log(arreglo);

if (arreglo[arreglo.length - 1] == sufijoBuscado){
    console.log(sufijoBuscado + ' es sufijo');
} else {
    console.log(sufijoBuscado + ' no es sufijo'); 
}*/

console.log(texto.substring((texto.length - sufijoBuscado.length), texto.length));

/* console.log(texto.substring((texto.length - sufijoBuscado.length), texto.length));
texto.substring(inicio,final)
inicio = texto.length-sufijo.length (longitud de todo el texto - longitud del sufijo)
final= texto.length (longitud de todo el texto/cantidad de caracteres)*/


if (texto.substring((texto.length - sufijoBuscado.length), texto.length) == sufijoBuscado){
    console.log(sufijoBuscado+ ' es sufijo del texto ingresado');
} else{
    console.log(sufijoBuscado+ ' NO es sufijo del texto ingresado');
}