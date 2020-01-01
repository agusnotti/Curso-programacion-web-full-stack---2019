let rl=require('readline-sync');
let palabra = rl.question('ingrese palabra '); 
//neuquen
//hola

let palabraCapicua = esCapicua(palabra);
 if (palabraCapicua == true){
    console.log('la palabra es capicua');
 } else {
     console.log('la palabra no es capicua');
     
 }


function esCapicua (palabra) {
    let indiceIzq=0;
    let indiceDer=palabra.length-1;
    let capicua = true;
    
    while (indiceIzq < indiceDer && capicua == true) {
        let a = palabra.charAt(indiceIzq);
        let b = palabra.charAt(indiceDer);
        
        if (a == b){
            indiceIzq++; 
            indiceDer--;
        } else {
            capicua = false;
        }
    }
    return capicua;
}
