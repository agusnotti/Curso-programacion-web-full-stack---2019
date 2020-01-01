let readlineSync = require('readline-sync');
let sueldoActual = readlineSync.questionInt('Ingrese su salario actual: '); 


if (sueldoActual <= 15000){
    sueldoActual = sueldoActual + (sueldoActual*0.2);
    console.log('recibe un aumento del 20%. Su sueldo actual sera de ', sueldoActual);
} else if (sueldoActual > 15000 && sueldoActual <= 20000){
    sueldoActual = sueldoActual + (sueldoActual*0.1);
    console.log('recibe un aumento del 10%. Su sueldo actual sera de ', sueldoActual);
} else if (sueldoActual > 20000 && sueldoActual <= 25000){
    sueldoActual = sueldoActual + (sueldoActual*0.05);
    console.log('recibe un aumento del 5%. Su sueldo actual sera de ', sueldoActual);
} else {
    console.log('No recibe aumento. Su sueldo actual es ', sueldoActual)
}