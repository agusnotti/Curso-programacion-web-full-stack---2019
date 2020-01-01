let readlineSync=require('readline-sync');
let notaParcial=readlineSync.question('ingrese nota de parcial ');
let notaTP=readlineSync.question('ingrese su nota de Trabajos Practicos ');

if (notaParcial < 4 || notaTP < 4){ 
    console.log('desaprobado');
}else{
     if (notaParcial >= 7 && notaTP >= 7){
         console.log('promosion');
     }else{
         console.log('aprobado');
     }
    }