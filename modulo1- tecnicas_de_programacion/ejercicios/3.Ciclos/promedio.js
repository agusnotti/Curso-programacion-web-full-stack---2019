let readlineSync=require('readline-sync');
let num, numMayor, numMenor, contador, suma, numIngresado;
numMayor = 0;
numMenor = 0;
contador = 1;
suma = 0;
numIngresado = 0;

while (num != 0){
    num = readlineSync.questionInt('ingrese un numero: ');
    suma = suma + num;
    numIngresado++

    console.log(suma+ '+' + num + '=' + suma);
    console.log('cant num '+numIngresado);


    if (contador == 1){
        numMayor = num;
        numMenor = num;           
    } else if (num > numMayor && num != 0){
        numMayor = num;
    } else if (num < numMenor && num != 0){
        numMenor = num;
    }
    contador++
}
console.log('fin. Ingreso 0.');
console.log('el menor numero es '+ numMenor);
console.log('el mayor numero es '+ numMayor);
