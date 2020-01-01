let rl = require('readline-sync');
let clave="eureka"; 
let maxIntentos=3;
let claveLeida="";
let intento=0;
while (clave!=claveLeida && intento<maxIntentos) {
    claveLeida=rl.question("Ingrese la clave: ");
    intento++;
}
if (clave!=claveLeida) {
    console.log("Ud agoto los 3 intentos que tenia.");
}