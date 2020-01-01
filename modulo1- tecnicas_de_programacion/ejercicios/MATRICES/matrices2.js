let fila, columna;

let tabla =  new Array (3);
tabla[0] = new Array (3);
tabla[1] = new Array (3);
tabla[2] = new Array (3);

for (fila = 0; fila < 3; fila++) {
    for (let columna = 0; columna < 3; columna++) { 
        tabla [fila][columna] = Math.floor(Math.random()*10);
    }
}

for (fila = 0; fila < 3; fila++) {
    for (let columna = 0; columna < 3; columna++) { 
    }
}
console.log(tabla[fila][columna]);
