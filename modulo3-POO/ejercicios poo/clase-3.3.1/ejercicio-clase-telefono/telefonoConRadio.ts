import Telefono from "./telefono";

export default class TelefonoConRadio extends Telefono{
    private frecuenciaActual: number;

    public constructor (estaPrendido: boolean, bateriaActual: number, frecuenciaActual: number){
        super(estaPrendido,bateriaActual);

        this.frecuenciaActual = frecuenciaActual;
    }

    public verFrecuenciaActual(){
        console.log("frecuencia actual: ...");
    }
}