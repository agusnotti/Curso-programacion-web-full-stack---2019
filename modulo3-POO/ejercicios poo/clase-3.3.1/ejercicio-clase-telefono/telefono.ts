export default class Telefono{
    protected estaPrendido: boolean;
    protected bateriaActual: number;

    public constructor (estaPrendido: boolean, bateriaActual: number){
        this.estaPrendido = false;
        this.bateriaActual = 50;
    }

    public mandarMensaje(){
        console.log("hola");
    }
    public hacerLlamada(){
        console.log("llamando");
        
    }
    public prenderApagar(){
        if(this.estaPrendido){
            this.estaPrendido=false;
        } else {
            this.estaPrendido=true;
        }
    }
    public cargarBateria(){
        this.bateriaActual = this.bateriaActual + 1;
    }
}

