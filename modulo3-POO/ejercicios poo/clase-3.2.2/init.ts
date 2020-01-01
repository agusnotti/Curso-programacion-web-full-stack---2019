import Decodificador from './Decodificador';
import Televisor from './Televisor';

let decodificador: Decodificador = new Decodificador(10);
let miTelevisor:Televisor = new Televisor(12, decodificador);

miTelevisor.prenderApagar(); //prendo el tele

console.log(miTelevisor.getCanal());

miTelevisor.cambiarCanal(50);
console.log(miTelevisor.getCanal());

miTelevisor.subirVolumen();
console.log(miTelevisor.getVolumenActual());

console.log("");

console.log(miTelevisor);







