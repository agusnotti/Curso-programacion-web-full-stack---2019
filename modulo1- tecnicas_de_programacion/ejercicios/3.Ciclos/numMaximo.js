let readlineSync=require('readline-sync');
let num, numMayor, contador;
numMayor = 0;
contador = 1;

while (num != 0) {
    num = readlineSync.questionInt('Ingrese un numero: ');
    
    if (contador == 1){
        numMayor = num;
    } else if (num > numMayor && num != 0){
        numMayor = num;       
    }
    
    contador++
}
console.log('Fin del programa. Ingreso 0');
console.log('El numero mayor es ' + numMayor);


