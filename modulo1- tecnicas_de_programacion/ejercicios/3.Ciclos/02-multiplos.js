let cadena="";  // creo una cadena vacia
for (let numero=1; numero<=100; numero++) {
    if ( (numero % 2 == 0) || (numero % 3 == 0) ) {
        cadena=cadena+numero+" "; // concateno cada numero pero como caracteres
    }
} 
console.log(cadena); // lo muestro al final