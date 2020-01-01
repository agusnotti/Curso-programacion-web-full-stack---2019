import Telefono from './telefono';
import TelefonoConCamara from './telefonoConCamara';

let miTelefono = new Telefono(false,50,false);
let miTelefonoConCamara = new TelefonoConCamara(false,50,false);

let mensaje:string= "hola";
let mensaje2:string= "agus";
let numero:number=12345;
let numero2:number= 2342424;

miTelefono.mandarMensaje(mensaje,numero);

miTelefonoConCamara.mandarMensaje(mensaje2, numero2);

miTelefonoConCamara.sacarFoto();

