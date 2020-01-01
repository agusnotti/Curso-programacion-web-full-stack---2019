let readlineSync=require('readline-sync')
let numIngresado, totalNumIng, porcNumPositivos, NumPositivos;
totalNumIng = 0;
NumPositivos = 0;

while (numIngresado != 0){
    numIngresado = readlineSync.questionInt('ingrese un numero: ');

    if (numIngresado != 0){
        totalNumIng++
    }
    
    if (numIngresado > 0){
        NumPositivos++
    }
    
}
console.log('Fin del programa. Inicio O.');
console.log('cantidad de num ingresados: ' + totalNumIng);
console.log('cantidad de numeros positivos ' + NumPositivos);

porcNumPositivos = (NumPositivos*100)/totalNumIng
console.log('el porcentaje de numeros positivos es: ' + porcNumPositivos +' %');
