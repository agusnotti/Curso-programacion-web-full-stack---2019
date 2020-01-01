let texto = 'no ENTIENDO nada y no me sale una mierda'; //lo recorre como si fuera un arreglo. inicia en posicion 0.

console.log('longitud del texto '+texto.length);//longitud de la palabra
console.log('posicion de la palabra "sale" '+texto.indexOf('sale')); //posicion de la primer ocurrencia de palabra buscada
console.log(texto.lastIndexOf('no'));//retorna la posición de la última ocurrencia de textoBuscado en una cadena.
console.log(texto.substring(3,11)); //retorna la porción de la cadena entre las posiciones inicio y final.posicion 11 es el espacio
console.log(texto.substr(19,10));//retorna la porción de la cadena desde x posicion y del largo indicado
console.log(texto.charAt(17));//obtener el caracter que se encuentra en una posicion determinada de una cadena.
console.log(texto.replace('mierda', 'popis'));//reemplaza un valor por otro en una cadena

let cadena = "";
let cadena1='no entiendo nada';
let cadena2 ='    y no me sale una mierda';
console.log(cadena.concat(cadena1,cadena2));//concatena cadenas

console.log(cadena2.trim());//eliminar los espacios en ambos extremos de una cadena.
console.log(texto.toUpperCase());//retorna una cadena con todos sus caracteres pasados a mayúsculas.
console.log(texto.toLowerCase());//retorna una cadena con todos sus caracteres pasados a minuscula.

let numero = 25;
let caden = '25.5'
console.log(numero.toString());//(aplicado a un número) convierte un numero en un string.
console.log(parseInt(caden)); //convierte un string en numero entero. le saca los decimales
console.log(parseFloat(caden));//convierte un string en numero. NO le saca los decimales.

let arreglo = texto.split(' ');//cadena en un arreglo, mediante un separador. Si no se ingresa separador el arreglo resultante tiene un unico elemento con la cadena completa. Si se ingresa una cadena vacia como separarador el arreglo resultante tiene tantos elementos como caracteres tenga la cadena con un caracter cada uno. 
console.log(arreglo);

