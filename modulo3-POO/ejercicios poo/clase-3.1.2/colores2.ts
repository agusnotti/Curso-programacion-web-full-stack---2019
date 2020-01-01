import * as paletaColores from './node_modules/@ant-design/colors';
import * as readlinesync from "./node_modules/readline-sync";
let colorIngresado:string = readlinesync.question('ingrese un color (red, volcano, gold, yellow, lime, green, cyan, blue, geekblue, purple, magenta, grey)');

let subcolor: string= obtenerColorAleatorio(paletaColores[colorIngresado]);
console.log(subcolor);

function obtenerColorAleatorio(colores):string{
    let i = Math.floor(Math.random()*(colores.length));
    let color:string= colores[i];
    return color;
}