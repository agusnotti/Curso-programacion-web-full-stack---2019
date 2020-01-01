let rl = require('readline-sync');
let num = rl.question('ingrese numero ');

let resultadoPot = potencia (num);
console.log(resultadoPot);


function potencia(n) {
    let potencia;
    potencia = 2**n;
    return potencia;
}