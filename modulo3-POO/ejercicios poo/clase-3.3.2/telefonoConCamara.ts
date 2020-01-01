import Telefono from './Telefono';
import Camara from "./camara";

export default class TelefonoConCamara extends Telefono{
    private camara: Camara;

    public constructor(estaPrendido: boolean, bateriaActual: number, linternaPrendida: boolean){
        super(estaPrendido,bateriaActual,linternaPrendida);
    }

    public sacarFoto():void{
        this.camara.sacarFoto();
    }
}