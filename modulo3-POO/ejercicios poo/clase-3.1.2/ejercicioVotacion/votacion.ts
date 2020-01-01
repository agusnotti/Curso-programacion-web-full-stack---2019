import * as fs from 'fs';
import * as readlineSync from 'readline-sync';

let nombreIngresado = readlineSync.question('ingrese nombre ');

let nombres = new Array();
let colegios = new Array();

cargarArreglo(nombres, leerArchivo('nombres.txt'))
//console.log(nombres);

cargarArreglo(colegios, leerArchivo('colegios.txt'))
//console.log(colegios);

asignarColegio();

function asignarColegio(){
    let indice:number= buscarPersona(nombreIngresado);
    let indiceCol = -1;
    if (indice != -1){
        indiceCol = Math.floor(Math.random() * (colegios.length));
        console.log(colegios[indiceCol]);
    } else {
        console.log('no se encontro la persona');
    }
}

function cargarArreglo(arreglo:string[], listado:string[]){
    for (let i = 0; i < listado.length; i++) {
        insertarPalabra(arreglo, listado[i]);
    }
}

function insertarPalabra(arreglo, palabra: string){
    arreglo.push(palabra);
}

function buscarPersona(palabra:string):number{
    return nombres.indexOf(palabra);
}

function leerArchivo(rutaArchivo: string): string[] {
    let archivo: string = fs.readFileSync(rutaArchivo, 'utf8');
    
    let lineas: string[] = archivo.split('\n');
    lineas = lineas.map(linea => linea.replace('\r', ''));

    return lineas;
}

//console.log(leerArchivo('colegios.txt'));
//console.log(leerArchivo('nombres.txt'));

