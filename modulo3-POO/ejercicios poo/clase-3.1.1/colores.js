let paletaColores = require("@ant-design/colors"); //red, volcano, gold, yellow, lime, green, cyan, blue, geekblue, purple, magenta, grey
//let readlineSync = require('readline-sync');
//let colorIngresado = readlineSync.question('ingrese un color (red, volcano, gold, yellow, lime, green, cyan, blue, geekblue, purple, magenta, grey)');

let argumentos = process.argv.slice(2);
let colorIngresado = argumentos[0];

console.log(argumentos);

let subcolor = obtenerColorAleatorio(paletaColores[colorIngresado]);
console.log(subcolor);

function obtenerColorAleatorio(colores){
    let i = Math.floor(Math.random()*(colores.length));
    let color = colores[i];
    return color;
} 