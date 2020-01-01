let readlineSync=require('readline-sync');
let nombre = readlineSync.question('ingrese nombre del alumno ');
let notaPra, notaPro, notaTeo, notaFinal;

while (nombre != ''){
    notaPra = readlineSync.question('ingrese nota de practica ');
    notaPro = readlineSync.question('ingrese nota de problemas ');
    notaTeo = readlineSync.question('ingrese nota teorica ');

    if ((notaPra > 0 && notaPra <= 10) && (notaPro > 0 && notaPro <= 10) && (notaTeo > 0 && notaTeo
        <= 10)){
        notaFinal = (notaPra*0.10) + (notaPro*0.50) + (notaTeo*0.40)
        console.log('la nota de final de ' + nombre + ' es '+ notaFinal);
    } else {
        console.log('error.');
    }
    nombre = readlineSync.question('ingrese nombre del alumno');
}