let rl = require('readline-sync');
let dados=rl.question("ingrese la cantidad de dados: ");
console.log("la probabilidad de sacar ",dados," dados iguales es de 1 entre ",(6**dados));