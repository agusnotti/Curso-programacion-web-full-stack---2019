export default class Auto{
    private marca:string;

    public constructor(marca:string){
        this.marca=marca;
    }
    

    public imprimirAuto():void{
        console.log(this);//llamado al objeto miAuto/segundoAuto desde la clase
    }

}

let miAuto= new Auto("fiat");
let segundoAuto=new Auto("chevrolet")

miAuto.imprimirAuto();
console.log(miAuto);

segundoAuto.imprimirAuto();
console.log(segundoAuto);

