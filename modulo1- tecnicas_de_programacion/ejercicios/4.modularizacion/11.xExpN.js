let rl = require('readline-sync');
let x = rl.question('ingrese un numero (base potencia) ');
let n = rl.question('ingrese otro numero (exponente potencia) ');

let resultadoPot = potencia (x, n);
console.log(resultadoPot);


function potencia(base,exp) {
    let potencia;
    potencia = base**exp;
    return potencia;
}