let rl = require('readline-sync');
let numero = rl.questionInt("ingrese un numero: ");
let max = numero;
let min = numero;

for (let i = 1; i < 5; i++) {
    numero=rl.questionInt("ing un numero: ");
    
    if (numero > max){
        max = numero;
    }
    if (numero < min){
        min = numero;
    }
    
    
} console.log('el maximo es '+ max + ' y el minimo es '+ min);
