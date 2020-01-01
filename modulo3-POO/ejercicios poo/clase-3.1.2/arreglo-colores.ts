import * as fs from 'fs';

let arregloColores = new Array();

cargarArreglo(leerArchivo('colores.txt'))
console.log(arregloColores);

console.log(arregloColores[2]);


function cargarArreglo(listadoColores: string[]){
    for (let i = 0; i < listadoColores.length; i++){
        insertarPalabra(listadoColores[i]); 
    }
}

function insertarPalabra(palabra: string){
    arregloColores.push(palabra);
}

function leerArchivo(rutaArchivo: string): string[] {
    let archivo: string = fs.readFileSync(rutaArchivo, 'utf8');
    
    let lineas: string[] = archivo.split('\n');
    lineas = lineas.map(linea => linea.replace('\r', ''));

    return lineas;
}

//console.log(leerArchivo('colores.txt'));