import Auto from "./Auto";

export default class RegistroAutomotor{
    private listadoAutos: Auto[];

    public constructor (){
        this.listadoAutos = new Array();
    }

    public buscarAutoPorPatente(patente:string){
        for (let i = 0; i < this.listadoAutos.length; i++) {
            if (this.listadoAutos[i].getPatente() == patente){
                return this.listadoAutos[i];
            }
        }
        return null;
    }
    public borrarAuto(auto:Auto){
        let indice = this.listadoAutos.indexOf(auto);
        if (indice != -1){
            this.listadoAutos.splice(indice, 1)
        }
    }
    public actualizarAuto(auto:Auto){
        let autoViejo = this.buscarAutoPorPatente(auto.getPatente());
        if (autoViejo != null){
            let indice = this.listadoAutos.indexOf(autoViejo);
            if (indice != -1){
                this.listadoAutos[indice]=auto;
            }
        }
    }
    public darAltaAuto(auto:Auto){
        this.listadoAutos.push(auto);
    }
    public getListadoAutos(){
        return this.listadoAutos;
    }
}