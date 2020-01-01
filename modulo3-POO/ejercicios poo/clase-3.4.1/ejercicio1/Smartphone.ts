import TelefonoInterface from './TelefonoInterface';

export default class Smartphone implements TelefonoInterface{
    private estaPrendido:boolean;
    
    public constructor(){
        this.estaPrendido = false;
    }
    
    prender(): void {
        this.estaPrendido = true;
    }
    apagar(): void {
        this.estaPrendido = false;
    }
    llamar(numero: string): void {
        console.log('llamar al numero '+numero);
    }

}