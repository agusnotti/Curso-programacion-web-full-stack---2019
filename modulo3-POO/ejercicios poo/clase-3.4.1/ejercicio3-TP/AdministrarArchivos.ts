import * as fs from 'fs';

export default class AdministrarArchivo{
    private rutaArchivo: string;

    public constructor(rutaArchivo: string){
        this.rutaArchivo = rutaArchivo;
    }

    public leerArchivo(): string[] {
        let archivo: string = fs.readFileSync(this.rutaArchivo, 'utf8');
        
        let lineas: string[] = archivo.split('\n');
        lineas = lineas.map(linea => linea.replace('\r', ''));
    
        return lineas;
    }

    public escribirArchivo(contenido: string):void{
        fs.writeFile(this.rutaArchivo, contenido, err => {
            if (err) {
              console.error(err)
              return
            }
            console.log("El archivo fue guardado")
          })
    }
}