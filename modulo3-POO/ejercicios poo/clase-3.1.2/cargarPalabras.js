var listado = new Array();
var a = ["verde", "azul", "violeta"];
var b = ["rojo", "negro", "amarilla"];
cargarListado(a);
cargarListado(b);
console.log(listado);
insertarPalabra("marron");
console.log(listado);
eliminarPalabra("rojo");
console.log(listado);
actualizarPalabra("verde", "verde manzana");
console.log(listado);
function cargarListado(listadoPalabras) {
    for (var i = 0; i < listadoPalabras.length; i++) {
        insertarPalabra(listadoPalabras[i]);
    }
}
function insertarPalabra(palabra) {
    listado.push(palabra);
}
function buscarPalabra(palabra) {
    return listado.indexOf(palabra);
}
function eliminarPalabra(palabra) {
    var indice = buscarPalabra(palabra);
    if (indice != -1) {
        listado.splice(indice, 1);
    }
}
function actualizarPalabra(palabraBuscada, nuevaPalabra) {
    var indice = buscarPalabra(palabraBuscada);
    if (indice != -1) {
        listado[indice] = nuevaPalabra;
    }
}
