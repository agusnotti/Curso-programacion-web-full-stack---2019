let readlineSync=require('readline-sync');
let diaSemana=readlineSync.question('ingrese dia de la semana: ');
let lunes= "lunes";
let martes= "martes";
let miercoles= "miercoles";
let jueves= "jueves";
let viernes= "viernes";
let sabado= "sabado";
let domingo= "domingo";


switch (diaSemana){
    case lunes:
    console.log('cursa neurociencia');
    break;

    case martes:
    console.log('cursa EDI');
    break;

    case miercoles:
    console.log('cursa diagnostico psicopedagogico');
    break;

    case jueves:
    console.log('At. al sujeto discapacitado');
    break;

    case viernes:
    console.log('cursa psicopatologia');
    break;

    default:
        if (diaSemana != sabado && diaSemana != domingo){
        console.log('ERROR. ingrese dia de la semana: ');
        } else {
        console.log('descansa el finde!!');

}
}