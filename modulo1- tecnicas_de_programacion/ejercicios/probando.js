console.log(5=="5");
console.log(5==5);
console.log("5"=="5");

console.log(5==="5");
console.log(5===5);
console.log("5"==="5");

console.log("1" + 2 + 3);
console.log(parseInt("1", 10) + 2 + 3);
console.log(parseInt("1") + 2 + 3);

let nombre = 'Agustin';
let apellido ='Meliendrez';
console.log('('+nombre+', '+apellido+')');
console.log(`(${nombre}, ${apellido})`);

let readlineSync=require('readline-sync');
let num1=readlineSync.questionInt('ingrese un numero ');
let num2=readlineSync.questionInt('ingrese otro numero ');
console.log('usted ha ingresado ',num1 + ' y ',num2);
console.log(`usted ha ingresado ${num1} y ${num2}`);
