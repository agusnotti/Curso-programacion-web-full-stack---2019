export default class Auto{
    private marca:string;
    private modelo: string;
    private velocidad: number;
    private encender: boolean;

    public constructor(marca:string, modelo:string, velocidad: number, encender:boolean){
        this.marca=marca;
        this.modelo=modelo;
        this.velocidad=0;
        this.encender=false;
    }
    public encenderMotor(){
        if (this.encenderMotor){
            this.encender=false;
        }else{
            this.encender=true;
        }
    }
    public acelerar(){
        this.velocidad += 10;
    }

}