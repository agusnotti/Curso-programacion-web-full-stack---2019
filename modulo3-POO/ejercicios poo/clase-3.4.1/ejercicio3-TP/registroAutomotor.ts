import Vehiculo from "./Vehiculo";
import AdministrarArchivo from "./AdministrarArchivos";
import Camioneta from "./Camioneta";
import AutoDeportivo from "./AutoDeportivo";
import AutoCiudad from "./AutoCiudad";

export default class RegistroAutomotor{
    private vehiculos: Vehiculo[];
    private adminitradorArchivo: AdministrarArchivo;

    public constructor(){
        this.adminitradorArchivo = new AdministrarArchivo('listadoAutos.txt');
        this.vehiculos = new Array();
    }

    public agregarVehiculo(vehiculo:Vehiculo): void{
        this.vehiculos.push(vehiculo);
    }
    public obtenerVehiculo(patente:string): Vehiculo{
        
        for (let i = 0; i < this.vehiculos.length; i++) {
            if (this.vehiculos[i].getPatente() == patente) {
                return this.vehiculos[i]
            }
        }
        return null;
    }
    

    public borrarVehiculo(vehiculo: Vehiculo): void{
        let i = this.vehiculos.indexOf(vehiculo);
        if (i != -1){
            this.vehiculos.splice(i,1)
        }
    }
    public completarRegistroDesdeArchivo(): void{
        let lineas = this.adminitradorArchivo.leerArchivo();
        for (let i = 0; i < lineas.length; i++) {            
            let infoAuto: string[] = lineas[i].split(',');

            if (infoAuto[0] == "Camioneta"){
                let camioneta = new Camioneta(infoAuto[1],infoAuto[2],parseInt(infoAuto[3]), infoAuto[4]);
                this.agregarVehiculo(camioneta);
            } else if (infoAuto[0]== "AutoDeportivo"){
                let autoDeportivo = new AutoDeportivo(infoAuto[1],infoAuto[2],parseInt(infoAuto[3]), infoAuto[4]);
                this.agregarVehiculo(autoDeportivo);
            } else if (infoAuto[0] == "AutoCiudad"){
                let autoCiudad = new AutoCiudad(infoAuto[1],infoAuto[2],parseInt(infoAuto[3]), infoAuto[4]);
                this.agregarVehiculo(autoCiudad);
            }                
        }
    }
    public guardarArchivo():void{
        let lineas = "";
        for (let i = 0; i < this.vehiculos.length; i++) {
            if (i < this.vehiculos.length-1){
                lineas += this.vehiculos[i].getTipoVehiculo()+","+this.vehiculos[i].getMarca()+','+this.vehiculos[i].getModelo()+","+this.vehiculos[i].getAnio()+","+this.vehiculos[i].getPatente()+"\n";
            } else {
                lineas += this.vehiculos[i].getTipoVehiculo()+","+this.vehiculos[i].getMarca()+','+this.vehiculos[i].getModelo()+","+this.vehiculos[i].getAnio()+","+this.vehiculos[i].getPatente();
            }
        }
        this.adminitradorArchivo.escribirArchivo(lineas);
    }
}



