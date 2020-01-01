/* Desarrolle un algoritmo que, dada una posición en una carrera se determine el tipo de medalla a entregar. 
Tenga en cuenta que para el primer puesto se entrega medalla de oro, segundo puesto medalla de plata y tercer 
puesto medalla de bronce. En caso que quede en otra posición se entrega certificado de participación */

let rl = require('readline-sync');
let cantidadParticipantes = rl.questionInt('cantidad de participantes ');
let posicionLlegada, nombreParticipante;
let contador = 1;

while (posicionLlegada != 0 && contador <= cantidadParticipantes){
    
    nombreParticipante = rl.question('nombre del participante ');
    posicionLlegada = rl.questionInt('ingrese posicion de llegada de  '+ nombreParticipante + ': ');
    switch (posicionLlegada) {
        case 1:
            console.log('medalla de oro');
            break;
        case 2:
            console.log('medalla de plata');
            break;
        case 3:
            console.log('medalla de bronce');
            break;

        default: console.log('certificado de participacion');
        
            break;
    }
    contador++;
}