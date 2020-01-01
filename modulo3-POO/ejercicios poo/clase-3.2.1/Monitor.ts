//estado: encendido/apagado, brilloActual, contrasteActual
//funcionalidades: encenderApagarMonitor, aumentarBrillo, disminuirBrillo, aumentarContraste, dsminuirContraste

export default class Monitor{
    private estaEncendido: boolean;
    private brilloActual: number;
    private contrasteActual: number;

    public constructor(){
        this.estaEncendido=false;
        this.brilloActual=25;
        this.contrasteActual=30;
    }

    public encenderApagarMonitor(){
        if(this.estaEncendido){
            this.estaEncendido=false;
        } else {
            this.estaEncendido=true;
        }
    }
    public aumentarBrillo(){
        this.brilloActual = this.brilloActual +1;
    }
    public disminuirBrillo(){
        this.brilloActual = this.brilloActual -1;
    }
    public aumentarContraste(){
        this.contrasteActual = this.contrasteActual +1;
    }
    public disminuirContraste(){
        this.contrasteActual = this.contrasteActual -1;
    }
}
