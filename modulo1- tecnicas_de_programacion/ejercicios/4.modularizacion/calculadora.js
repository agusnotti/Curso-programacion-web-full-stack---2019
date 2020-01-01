let readlineSync = require('readline-sync');
let i, linea;
let numero1 = readlineSync.questionInt("Ingrese un número: ");
let numero2 = readlineSync.questionInt("Ingrese un número: ");
let opcionMenu = readlineSync.questionInt('ingrese 1 para sumar, 2 para restar, cualquier otra cifra para salir')

if (opcionMenu == 1) {
    linea = "-";
    for (i = 0; i <= 40; i++) {
    linea = linea + "-";
    };
    console.log(linea);
    console.log("el resultado es: ", numero1 + numero2);
    linea = "-";
    for (i = 0; i <= 40; i++) {
    linea = linea + "-";
    };
    console.log(linea);
    }
    else if (opcionMenu == 2) {
    linea = "-";
    for (i = 0; i <= 40; i++) {
    linea = linea + "-";
    };
    console.log(linea);
    console.log("el resultado es: ", numero1 - numero2);
    linea = "-";
    for (i = 0; i <= 40; i++) {
    linea = linea + "-";
    };
    console.log(linea);
    }
    else if (opcionMenu == 2) {
        linea = "-";
        for (i = 0; i <= 40; i++) {
        linea = linea + "-";
        };
        console.log(linea);
        console.log("el resultado es: ", numero1 - numero2);
        linea = "-";
        for (i = 0; i <= 40; i++) {
        linea = linea + "-";
        };
        console.log(linea);
        }