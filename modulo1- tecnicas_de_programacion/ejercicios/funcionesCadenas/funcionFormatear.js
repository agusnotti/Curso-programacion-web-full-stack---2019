/*Escriba una funcion que permita formatear un texto con las siguientes caracteristicas:
-se debe especificar un tamaño.
-se debe especificar un caracter de relleno.
-se debe especificar la ubicacion del texto.*/

let rl = require('readline-sync');
let texto =  rl.question('ingrese texto ');
let caracter =  rl.question('caracter de relleno');
let orientacion = rl.question('MENU: 1 si lo quiere a la izquierda, 2 si lo quiere a la derecha');
let tamaño = 10;
let textoFormateado = formatearTexto(texto,caracter,orientacion,tamaño);
console.log(textoFormateado);


function formatearTexto (tex,c, o,tam) {
    let linea ='';

    if (o == 2){
        if (tam == tex.length){
            linea = tex;
        } else if (tex.length < tam){
            for (let i = 0; i < tam - tex.length; i++) {
                linea += c;
            }
            linea += tex;
        } else {
            linea = tex.substring(0, tam);
        }  
    } else if (o == 1){
        if (tam == tex.length){
            linea = tex;
        } else if (tex.length < tam){
            linea += tex;
            for (let i = 0; i < tam - tex.length; i++) {
                linea += c;
            }
        } else {
            linea = tex.substring(0, tam);
        }
    }
    return linea;
}

/* 
***1
**12
*123
1234
adios

******
 */