let num =100;
fibonacci(num);

function fibonacci(num) {
    let suma = 0;
    let numActual = 1;
    let numAnterior = 0;
    let linea = numAnterior + ' ' + numActual;

    for (let numero = 0; numero <= num; numero++) {
        suma = numActual + numAnterior;
        numAnterior = numActual;
        numActual = suma;
        linea += ' '+suma;
    }
    console.log (linea);
}

