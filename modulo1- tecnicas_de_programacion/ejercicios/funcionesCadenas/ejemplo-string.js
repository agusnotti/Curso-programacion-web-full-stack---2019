let cadena = "Hola chanchita como estas. No desespereis. TE AMO MUCHO chanchita !!";
console.log("El tamaño de la cadena es:" + cadena.length);
let palabra = "chanchita";
let palabraFinal = "desespereis";

console.log("El texto es: " + cadena);

let resultado = obtenerSubCadena(palabra, palabraFinal);
console.log("La subcadena es: " + resultado);


function obtenerSubCadena(palabraInicial, palabraFinal) { 
    let subCadena = "No se encontro la subcadena";
    
    if(cadena.indexOf(palabraInicial) != -1 && cadena.lastIndexOf(palabraFinal) != -1){
        subCadena = cadena.substring(cadena.indexOf(palabraInicial), cadena.lastIndexOf(palabraFinal)+palabraFinal.length)
    }
    
    return subCadena;
}

console.log("El index/posicion de la palabra culo es:" + cadena.indexOf("culo"));
console.log("El index/posicion de la palabra chanchita es:" + cadena.indexOf("chanchita"));
console.log("El ultimo index/posicion de la palabra chanchita es:" + cadena.lastIndexOf("chanchita"));
console.log("La funcion cadena.substring(5,10) da como resultado: " + cadena.substring(5,10));
console.log("La funcion cadena.substr(5,10) da como resultado: " + cadena.substr(5,10));
console.log("La funcion cadena.toUpperCase() da: " + cadena.toUpperCase());
console.log("La funcion cadena.toLowerCase() da: " + cadena.toLowerCase());


let cadena1="2001";
let numero = 2001;
console.log(numero == cadena1); // TRUE
console.log(numero === cadena1); // FALSE
console.log(numero === parseInt(cadena1)); // TRUE
console.log(numero.toString() === cadena1); // TRUE
console.log(numero == parseInt(cadena1)); // TRUE
console.log(numero.toString() == cadena1); // TRUE
console.log(numero.toString());
console.log(numero);
console.log(parseInt(cadena1));
console.log(cadena1);







//let numero=2001;
//numero.toString() //retorna "2001"

//parseInt(cadena) //retorna 2001

//let cadena="2001.40";
//parseFloat(cadena) //retorna 2001.40
