let readlineSync = require('readline-sync');
let vuelta1=readlineSync.questionInt('Ingrese tiempo de la primer vuelta: ');
let vuelta2=readlineSync.questionInt('Ingrese tiempo de la segunda vuelta: ');
let vuelta3=readlineSync.questionInt('Ingrese tiempo de la tercera vuelta: ');
let vuelta4=readlineSync.questionInt('Ingrese tiempo de la cuarta vuelta: ');

let tiempoTotal=vuelta1+vuelta2+vuelta3+vuelta4;
console.log('el tiempo total de las vueltas es: ', tiempoTotal);
let promedioVueltas= tiempoTotal/4;
console.log('el promedio de tiempo de la vuelta en segundos es ', promedioVueltas);
