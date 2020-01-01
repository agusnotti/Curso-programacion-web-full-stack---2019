let rl = require('readline-sync');
let numero=rl.questionInt("ingrese un numero: ");
let posit=0; //cuenta los positivos
let total=0; //cuenta todos
while (numero!=0) {
    total++; //suma a todos
    if (numero>0) posit++; //es mayor que 0 entonces suma a positivos 
    numero=rl.questionInt("ingrese un numero: ");
}
if (total > 0)
console.log("Se ingresaron ", posit, " es decir el ", posit*100/total, "%");