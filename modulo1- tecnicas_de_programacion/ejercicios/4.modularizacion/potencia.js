let readlineSync=require('readline-sync');
let base = readlineSync.questionInt('ingresar base de la potencia ');
let exp = readlineSync.questionInt('ingresar exponente ');

while (exp < 0){
    exp = readlineSync.questionInt('ingresar exponente ');
}

let resultado = calcularPotencia (base, exp);
console.log(resultado);

function calcularPotencia (base,exp){
    let resultado;
    resultado = base**exp;
    return resultado;
} 
