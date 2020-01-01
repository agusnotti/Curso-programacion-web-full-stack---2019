let rl = require('readline-sync');
let num = rl.question('ingrese numero ')

serieFactorial(num);


function serieFactorial(n) {
    let resultado = 1;
    for (let num = 1; num <= n; num++) {
        resultado = resultado*num;
        console.log('factorial de '+ num + ' es '+resultado);
    }
}