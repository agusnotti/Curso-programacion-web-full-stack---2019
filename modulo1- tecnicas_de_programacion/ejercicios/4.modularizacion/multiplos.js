let rl = require('readline-sync');
let num1 = rl.questionInt('ingrese un numero ');
let num2 = rl.questionInt('ingrese otro numero ');


if (esMultiplo (num1, num2)){
    console.log('el '+ num1 + ' es multiplo de '+ num2);
} else {
    console.log('el '+ num1 + ' NO es multiplo de '+ num2);
}

function esMultiplo (num1, num2){
    if (num1 % num2 == 0){
        return true;
    } else {
        return false;
    }
}