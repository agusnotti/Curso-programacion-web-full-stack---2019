let rl = require('readline-sync');
let num1 = rl.questionInt('Ingrese un numero ');
let num2 = rl.questionInt('ingrese otro numero ');
let operacion = rl.questionInt('MENU: ingrese 1 para sumar, 2 para restar ');

let resultado = calcularResultado (num1, num2, operacion);
console.log(resultado);


function calcularResultado (num1, num2, operacion){
    let resultado1;
    
    if (operacion == 1){
        resultado1= num1 + num2;
    } else if (operacion == 2){
        resultado1= num1-num2;
    }
    
    return resultado1;
}
