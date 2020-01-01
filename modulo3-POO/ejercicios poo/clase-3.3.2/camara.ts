export default class Camara{
    private camaraFrontalActivada: boolean;
    private brillo: number;
    private zoom: number;

    public constructor(camaraFrontalActivada:boolean, brillo:number, zoom: number){
        this.camaraFrontalActivada=false;
        this.brillo = 0;
        this.zoom = 0;
    }

    public sacarFoto():void{
        console.log("sacar foto....");
    }
}