export default class Auto {
    private estaPrendido: boolean;
    private velocidadActual: number;
    private marca: string;
    private modelo: string;
    private tipoCombustible: string;
    private ano: number;
    private patente: string;
    
    public constructor(marca, modelo, tipoCombustible, ano, patente){
        this.estaPrendido = false;
        this.velocidadActual = 0;
        this.marca = marca;
        this.modelo = modelo;
        this.tipoCombustible = tipoCombustible;
        this.ano = ano;
        this.patente = patente;
    }

    public getMarca(){
        return this.marca;
    }

    public setMarca(marca: string){
        this.marca = marca;
    }

    public getModelo(){
        return this.modelo;
    }

    public setModelo(modelo:string){
        this.modelo=modelo;
    }

    public getTipoCombustible(){
        return this.tipoCombustible;
    }
    public setTipoCombustible(tipoCombustible:string){
        this.tipoCombustible=tipoCombustible;
    }
    public getAno(){
        return this.ano;
    }
    public setAno(ano:number){
        this.ano=ano;
    }
    public getPatente(){
        return this.patente;
    }
    public setPatente(patente:string){
        this.patente=patente;
    }
    
    public prenderApagar(): void{
        if(this.estaPrendido){
            this.estaPrendido = false;
        }else{
            this.estaPrendido=true;
        }
    }
    public acelerar(): void{
        this.velocidadActual = this.velocidadActual +1;
    }

    public frenar(): void{
        this.velocidadActual = this.velocidadActual -1;
    }
}