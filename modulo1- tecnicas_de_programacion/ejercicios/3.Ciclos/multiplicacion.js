let readlineSync= require('readline-sync');
let num1 = readlineSync.questionInt('tabla de multiplicacion ');
let num2 = readlineSync.questionInt('ingrese hasta que numero quiere que se multiplique ');
let contador, multiplicacion;
contador = 1
multiplicacion = 0


while (contador <= num2) {
    multiplicacion = num1 * contador;
    console.log(num1 + "x" + contador + "=" + multiplicacion);
    contador = contador +1;
}