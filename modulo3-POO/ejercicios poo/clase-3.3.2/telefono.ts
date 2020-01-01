export default class Telefono{
    private estaPrendido:boolean;
    private bateriaActual: number;
    protected linternaPrendida: boolean;

    public constructor(estaPrendido: boolean, bateriaActual: number, linternaPrendida: boolean){
        this.estaPrendido = false;
        this.bateriaActual = 50;
        this.linternaPrendida = false;
    }

    public mandarMensaje(mensaje:string, numero:number):void{
        console.log(mensaje+" al numero "+ numero);
    }
    public hacerLlamada():void{
        console.log("llamando...");
    }
    public prenderApagar():void{
        if (this.estaPrendido){
            this.estaPrendido=false
        }else{ 
            this.estaPrendido=true;
        }
    }

}