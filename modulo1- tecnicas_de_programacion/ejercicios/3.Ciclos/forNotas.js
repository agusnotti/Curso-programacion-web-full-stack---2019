let readlineSync = require('readline-sync');
let nota, suma, promedio, contador;
suma = 0;

for (contador=1; contador <= 10 ; contador++) {
    nota=readlineSync.questionInt("Ingrese una nota: "); 
    suma = suma + nota;
      
}
promedio = suma/10
console.log( 'el promedio es ',promedio);

