export default class Matriz{
    private cantidadFilas:number;
    private cantidadColumnas:number;
    private matriz:number[][];
    

    public constructor(cantidadFilas:number, cantidadColumnas:number){
        this.cantidadFilas = cantidadFilas;
        this.cantidadColumnas = cantidadColumnas;
        this.matriz = new Array(cantidadFilas);
            for (let i = 0; i < this.matriz.length; i++) {
                this.matriz[i] = new Array(cantidadColumnas);
            }
    }
    public getCantidadFilas():number{
        return this.cantidadFilas;
    }
    public getCantidadColumnas():number{
        return this.cantidadColumnas;
    }
    
    public getDato(fila:number, columna: number):number{
        if (fila <= this.cantidadFilas && columna <= this.cantidadColumnas){
            return this.matriz[fila][columna];
        } else {
            return -1;
        }
    }
    public insertarDato(dato:number, fila: number, columna: number):void{
        if (fila <= this.cantidadFilas && columna <= this.cantidadColumnas){
            this.matriz[fila][columna] = dato;
        }
    }
    public actualizarDato(dato:number, fila: number, columna: number){
        this.insertarDato(dato,fila,columna);
    }
    public getDatosMatriz(){
        for (let i = 0; i < this.cantidadFilas; i++) {
            let fila = "";
            for (let j = 0; j < this.cantidadColumnas; j++) {
                fila += this.matriz[i][j] + " | ";
            }
            console.log(fila);                
        }
    }
}