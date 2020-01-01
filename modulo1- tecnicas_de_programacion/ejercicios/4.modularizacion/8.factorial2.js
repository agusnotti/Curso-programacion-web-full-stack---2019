let rl = require('readline-sync');
let num, resultado;

for (let i = 0; i < 10; i++) {
    num = rl.question('ingrese numero ')
    resultado = factorial(num);
    console.log('factorial de '+ num + ' es '+ resultado);  
}

function factorial(n) {
    let resultado = 1;
    for (let num = 1; num <= n; num++) {
        resultado = resultado*num;
    }
    return resultado;
}


