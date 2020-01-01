import AutoCiudad from "./AutoCiudad";
import AutoDeportivo from "./AutoDeportivo";
import Camioneta from "./Camioneta";
import Vehiculo from "./Vehiculo";

let autoCiudad:Vehiculo = new AutoCiudad('ford','focus', 2005);
let autoDeportivo:Vehiculo = new AutoDeportivo ('Audi', 'R8', 2006);
let camineta:Vehiculo = new Camioneta('Toyota', 'Hilux', 2009);

console.log("Marca: " + autoCiudad.getMarca() + ", " + "Modelo: " + autoCiudad.getModelo() + ", " + "Año: " + autoCiudad.getAnio());


console.log(autoCiudad.getVelocidad());
autoCiudad.prender();
autoCiudad.acelerar();
console.log(autoCiudad.getVelocidad());

console.log("Marca: " + autoDeportivo.getMarca() + ", " + "Modelo: " + autoDeportivo.getModelo() + ", " + "Año: " + autoDeportivo.getAnio());
console.log(autoDeportivo.getVelocidad());
autoDeportivo.prender();
autoDeportivo.acelerar();
console.log(autoDeportivo.getVelocidad());


