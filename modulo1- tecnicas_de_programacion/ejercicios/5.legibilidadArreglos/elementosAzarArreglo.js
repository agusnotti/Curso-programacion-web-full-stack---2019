let completarArreglo = new Array (10);

for (let i = 0; i < 10; i++) {
    completarArreglo[i] = azar(100) 
}

for (let i = 0; i < 10; i++) {
    console.log('numero completado al azar: '+completarArreglo[i])
}

function azar (maximo){
    return Math.floor(Math.random()*maximo); //funcion para seleccionar numeros al azar. 
}

//math.florr quita los decimales a los numeros (porque el arreglo necesita numeros enteros).