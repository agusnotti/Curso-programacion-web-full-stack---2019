let readlineSync= require('readline-sync');
let nota, suma, promedio, contador;
contador = 1;
suma=0

while (contador <= 5) {
    nota=readlineSync.questionInt('ingrese una nota ');
    suma = suma + nota;
    contador = contador + 1;
}
 promedio = suma/5;
 console.log('su promedio es ', promedio);