//Hacer una función que determine si una palabra es palíndromo (capicúa). 

let rl=require('readline-sync');
let palabra = rl.question('ingrese palabra ');

let palabraArreglo = palabra.split('');
console.log(palabraArreglo);

invertirArreglo(palabraArreglo, palabraArreglo.length);
console.log(palabraArreglo);

let palabraInvertida = obtenerPalabraDesdeArreglo (palabraArreglo);

if (palabra == palabraInvertida){
    console.log('la palabra es capicua');
} else {
    console.log('la palabra NO es capicua');
}

function obtenerPalabraDesdeArreglo(arreglo) {
    let cadena = "";
    for (let i = 0; i < arreglo.length; i++) {
        cadena+= arreglo [i];   
    }
    return cadena;
}

function invertirArreglo(v, cantidad) {
    let indiceIzq=0;
    let indiceDer=cantidad-1;
    let aux;
    while (indiceIzq < indiceDer) {
        aux = v[indiceIzq];
        v[indiceIzq] = v[indiceDer];
        v[indiceDer] = aux;
        indiceIzq++; 
        indiceDer--;
    }
}

/*function obtenerPalabra(arreglo) { 
    let cadena = "";
    for (let i = arreglo.length - 1; i > 0; i--) {
        cadena += arreglo[i];
    }
    return cadena;
 }*/