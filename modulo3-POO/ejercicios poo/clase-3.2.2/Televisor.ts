import Decodificador from './Decodificador';

export default class Televisor{
    private prendido:boolean;
    private volumenActual:number;
    private decodificador:Decodificador;

    public constructor(volumenActual:number, decodificador:Decodificador){
        this.prendido = false;
        this.volumenActual = volumenActual;
        this.decodificador = decodificador;
    }
    public prenderApagar():void{
        if(this.prendido){
            this.prendido = false;
        } else {
            this.prendido = true;
        }
    }
    public getCanal():number{
        return this.decodificador.getCanal();
    }
    public getVolumenActual(): number{
        return this.volumenActual;
    }
    public subirVolumen():void{
        this.volumenActual++;
    }
    public bajarVolumen():void{
        this.volumenActual--;
    }
    public cambiarCanal(canal:number):void{
        this.decodificador.setCanal(canal);
    }
    public subirCanal():void{
        this.decodificador.subirCanal();
    }
    public bajarCanal():void{
        this.decodificador.bajarCanal();
    }
}