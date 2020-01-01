class Auto{
    private marca: string;
    private modelo: string;
    

    public constructor (marca:string, modelo: string){
        this.marca = marca;
        this.modelo = modelo;
        
    }
    public getMarca(): string{
        return this.marca;
    }
    public getModelo(): string{
        return this.modelo;
    }
}

class AutoDeportivo extends Auto{
    private tamañoCañoEscapeGigante: number;

    public constructor(marca: string, modelo: string, tamañoEscape: number){
        super(marca,modelo);

        this.tamañoCañoEscapeGigante = tamañoEscape;
        
    }

    public getTamañoEscape(): number{
        return this.tamañoCañoEscapeGigante;
    }

    
}

let miAutoDeportivo = new AutoDeportivo("fiat", "uno", 200);
console.log(miAutoDeportivo.getMarca());
console.log(miAutoDeportivo.getModelo());



