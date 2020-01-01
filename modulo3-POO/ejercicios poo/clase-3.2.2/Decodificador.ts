export default class Decodificador{
    private canalActual: number;

    public constructor(canalActual: number){
        this.canalActual = canalActual;
    }

    public getCanal(): number{
        return this.canalActual;
    }
    public setCanal(canal:number):void{
        this.canalActual = canal;
    }
    public subirCanal():void{
        this.canalActual++;
    }
    public bajarCanal():void{
        this.canalActual--;
    }
}