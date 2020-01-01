export default class Libro{
    private autor: string;
    private titulo: string;
    private editorial: string;
    private cantidadPaginas: number;
    private anio: number;

    public constructor(autor: string, titulo:string, editorial: string, cantidadPaginas: number, anio: number){
        this.autor = autor;
        this.titulo = titulo;
        this.editorial = editorial;
        this.cantidadPaginas = cantidadPaginas;
        this.anio = anio;
   }

    public getAutor():string{
       return this.autor;
   }
    public setAutor(nuevoAutor:string): void{
        this.autor = nuevoAutor;
   }
    public getTitulo():string{
    return this.titulo;
}
    public setTitulo(nuevoTitulo:string): void{
        this.titulo = nuevoTitulo;
    }
    public getEditorial():string{
        return this.editorial;
    }
    public setEditorial(nuevaEditorial:string): void{
         this.editorial = nuevaEditorial;
    }
    public getCantidadPaginas():number{
        return this.cantidadPaginas;
    }
    public setCantidadPaginas(cantidadPaginas:number): void{
         this.cantidadPaginas = cantidadPaginas;
    }
    public getAnio():number{
        return this.anio;
    }
    public setAnio(anio:number): void{
         this.anio = anio;
    }
}