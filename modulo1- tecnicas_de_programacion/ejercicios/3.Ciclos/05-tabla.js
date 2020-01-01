let rl = require('readline-sync');
let base=rl.questionInt("ingrese la base: ");
let filas=rl.questionInt("ingrese cuantas filas quiere mostrar: ");
for (let numero=1;numero<=filas;numero++) {
    console.log(base," x ",numero," = ",base*numero);
}