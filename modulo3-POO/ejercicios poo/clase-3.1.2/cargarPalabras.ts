let listado = new Array();

let a= ["verde", "azul", "violeta"];
let b= ["rojo", "negro", "amarilla"];

cargarListado(a);

cargarListado(b);
console.log(listado);

insertarPalabra("marron");
console.log(listado);

eliminarPalabra("rojo");
console.log(listado);

actualizarPalabra("verde", "verde manzana");
console.log(listado);

function cargarListado(listadoPalabras: string[]){
    for (let i = 0; i < listadoPalabras.length; i++){
        insertarPalabra(listadoPalabras[i]); 
    }
}

function insertarPalabra(palabra: string){
    listado.push(palabra);
}

function buscarPalabra(palabra:string):number{
    return listado.indexOf(palabra);
}

function eliminarPalabra(palabra:string){
    let indice: number = buscarPalabra(palabra);
    if (indice != -1){
        listado.splice(indice, 1);
    }
}

function actualizarPalabra(palabraBuscada:string, nuevaPalabra:string){
    let indice: number = buscarPalabra(palabraBuscada);
    if (indice != -1){
        listado[indice]=nuevaPalabra;
    }
}