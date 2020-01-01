export default class Movil{
    protected velocidad:number;

    constructor(velocidad:number){
        this.velocidad=velocidad;
    }

    protected getVelocidad():number{return this.velocidad};
}