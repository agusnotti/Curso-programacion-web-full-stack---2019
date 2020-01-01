//Hacer la función esParte que indica si una palabra está contenida en otra palabra/texto. 


let rl=require('readline-sync');
let texto = rl.question('ingrese texto ');
let cadena = rl.question('palabras/caracter buscado ');

esParte(texto,cadena);

function esParte(tex,cad){
    if (tex.indexOf(cad) != -1){
        console.log(cad+' es parte del texto ingresado');
    } else {
        console.log(cad+' No es parte del texto ingresado');
    }
}