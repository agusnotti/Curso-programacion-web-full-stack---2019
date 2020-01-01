let rl = require('readline-sync');
let numero=rl.questionInt("ingrese un numero: ");
while (numero<=0) {
    console.log("por favor ingrese un numero entero positivo.");
    numero=rl.questionInt("ingrese un numero: ");
}
if (numero % 2 == 0) {
    console.log(numero, "es par");
} else {
    console.log(numero, "es impar");
}
//VERSION REDUCIDA DE IF: if (numero % 2 == 0) console.log(numero, "es par"); else console.log(numero, "es impar");
