let rl=require('readline-sync');
let texto = rl.question('ingrese texto ');
let palabra = rl.question('ingrese palabra buscada ');
let palabra2 = rl.question('ingrese palabra buscada final ');
let indice = texto.indexOf(palabra);
let indice2 = texto.indexOf(palabra2);

if (indice == -1 || indice2 == -1){
    console.log('la palabra no esta');
} else {
    console.log('la frase esta entre el indice '+ indice + ' y el indice '+ indice2);   
    console.log (texto.substring(indice, indice2 + palabra2.length));
}


