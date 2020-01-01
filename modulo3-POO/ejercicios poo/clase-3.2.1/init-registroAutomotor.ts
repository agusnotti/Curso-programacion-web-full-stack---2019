import Auto from './Auto';
import RegistroAutomotor from './RegistroAutomotor';
import fs from "fs";


let registro = new RegistroAutomotor();


let lineas = leerArchivo('info_autos.txt');

for (let i = 0; i < lineas.length; i++) {
    let infoAuto: string[] = lineas[i].split(',');
    
    let auto = new Auto(infoAuto[0], infoAuto[1], infoAuto[2], infoAuto[3], infoAuto[4]);
    registro.darAltaAuto(auto);
}
console.log(registro.buscarAutoPorPatente('ABC123'));

let auto2 = new Auto ("Ford","focus","Nafta",2010,"AGF133");

registro.darAltaAuto(auto2);

console.log(registro);





function leerArchivo(rutaArchivo: string): string[] {
    let archivo: string = fs.readFileSync(rutaArchivo, 'utf8');
    
    let lineas: string[] = archivo.split('\n');
    lineas = lineas.map(linea => linea.replace('\r', ''));

    return lineas;
}