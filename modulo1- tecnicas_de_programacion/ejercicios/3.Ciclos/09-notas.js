let rl = require('readline-sync');
let npra, npro, nteo;
let nombre=rl.question("ingrese un nombre: ");
while (nombre!="") {
    let npra=rl.questionInt("ingrese la nota de practica: ");
    let npro=rl.questionInt("ingrese la nota de problemas: ");
    let nteo=rl.questionInt("ingrese la nota de teoria: ");
    if ((npra>=0 && npra<=10) && (npro>=0 && npro<=10) && 
        (nteo>=0 && nteo<=10)) {
        console.log ("la nota final de ", nombre," es: ",npra*.1+npro*.5+nteo*.4);
    } else {
        console.log ("No es posible calcular la nota final de ", nombre);
    }
    nombre=rl.question("ingrese un nombre: ");
}