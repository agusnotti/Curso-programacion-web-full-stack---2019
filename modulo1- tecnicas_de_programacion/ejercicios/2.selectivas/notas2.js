let readlineSync=require('readline-sync');
let notaParcial=readlineSync.question('nota del pacial: ');
let notaTP=readlineSync.question('notas Trabajo practico ');
let parcialAprobado = 4
let tpAprobado = 4
let notaPromocion = 7

if (notaParcial <= parcialAprobado || notaTP <= tpAprobado){
    console.log('desaprobado');
} else if (notaParcial >= notaPromocion && notaTP >= notaPromocion){
    console.log('promocion');
} else {
    console.log('aprobado')
}