//funcion para determinar si la segunda letra es mayuscula

let rl=require('readline-sync');
let palabra = rl.question('ingrese palabra ');

let mayuscula = esMayuscula(palabra,1)
console.log(mayuscula);




function esMayuscula (palabra, posicion){
    let letra = palabra.charAt(posicion);

    if (letra == letra.toUpperCase()){
        return true;
    } else {
        return false;
    }
}


