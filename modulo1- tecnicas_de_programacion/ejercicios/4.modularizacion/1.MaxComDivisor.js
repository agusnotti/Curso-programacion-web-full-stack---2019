let rl = require('readline-sync');
let num1 = rl.questionInt('ingrese un numero ');
let num2 = rl.questionInt('ingrese otro numero ');
let mcd;

if (num1 < num2){
    mcd = calcularMcd(num1,num2);
}else if (num2 < num1){
    mcd = calcularMcd(num2, num1);
}
console.log('el maximo comun divisor es '+mcd);

function calcularMcd(menor, mayor){
    let mcd = 1;
    for (let divisor = 1; divisor <= menor; divisor++) {
        if (menor % divisor == 0 && mayor % divisor == 0){
            mcd = divisor;
        }
    } 
    return mcd;
}
