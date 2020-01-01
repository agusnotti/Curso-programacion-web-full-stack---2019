import Telefono from "./telefono";

export default class TelefonoConCamara extends Telefono{
    public constructor (estaPrendido: boolean, bateriaActual: number){
        super(estaPrendido,bateriaActual)
    }

    public sacarFoto(){
        console.log("sacar foto");
    }
}

