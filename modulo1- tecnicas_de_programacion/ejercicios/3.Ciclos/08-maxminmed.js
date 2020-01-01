let rl = require('readline-sync');
let numero=rl.questionInt("ingrese un numero: ");
let max=numero; //cuenta los positivos
let min=numero; //cuenta todos
let sum=0;
let can=0;
while (numero!=0) {
    sum+=numero;
    can++;
    console.log(sum);
    
    if (numero>max) max=numero; 
    if (numero<min) min=numero;
    numero=rl.questionInt("ingrese un numero: ");
}
if (can > 0) console.log("El maximo es ", max, ", el minimo es ", min, " y la media es ",sum/can);