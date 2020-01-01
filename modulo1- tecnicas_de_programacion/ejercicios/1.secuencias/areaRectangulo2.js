let readlineSync = require ('readline-sync');
let base = readlineSync.questionInt('indique la base del rectangulo: ');
let altura = readlineSync.questionInt('indique la altura del rectangulo: ');
let areaRectangulo = base*altura
console.log('el area del rectangulo es: ',areaRectangulo);