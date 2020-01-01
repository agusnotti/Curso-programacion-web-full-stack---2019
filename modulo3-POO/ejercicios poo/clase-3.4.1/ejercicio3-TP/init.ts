import AutoCiudad from "./AutoCiudad";
import AutoDeportivo from "./AutoDeportivo";
import Camioneta from "./Camioneta";
import Vehiculo from "./Vehiculo";
import RegistroAutomotor from "./RegistroAutomotor";
import AdministrarArchivo from "./AdministrarArchivos";

let registroAutomotor = new RegistroAutomotor();
registroAutomotor.completarRegistroDesdeArchivo();


let autoCiudad:Vehiculo = new AutoCiudad('ford','ka', 2010, 'huy647');
let autoDeportivo:Vehiculo = new AutoDeportivo ('lamborghini','Diablo',2006,'agu666');
let camioneta:Vehiculo = new Camioneta('Toyota', 'Hilux', 2009, 'adg546');
let administradorArchivo = new AdministrarArchivo('AdministrarArchivos.ts')

registroAutomotor.agregarVehiculo(autoCiudad);
registroAutomotor.agregarVehiculo(autoDeportivo);
registroAutomotor.agregarVehiculo(camioneta);

registroAutomotor.guardarArchivo();

autoDeportivo.getPatente();







