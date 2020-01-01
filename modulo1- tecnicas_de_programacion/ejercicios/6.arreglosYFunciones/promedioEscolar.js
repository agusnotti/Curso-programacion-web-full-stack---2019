let rl = require('readline-sync');
let dimensionArreglo = rl.questionInt('cantidad de alumnos ');
let nombreAlumno, promedio;

let alumno = new Array (dimensionArreglo);
for (let i = 0; i < dimensionArreglo; i++) {
    nombreAlumno = rl.question('notas del alumno ');
    
    let notas = new Array (3)
    cargarNotas (alumno, 3);
    
    promedio = promedioNotas(notas, dimensionArreglo);
    console.log(promedio);
}




function cargarNotas(v, dim){
    let suma = 0;
    for (let i = 0; i < dim; i++) {
        v[i] = rl.questionInt('ingrese nota ');
        suma += v[i];   
    }
    console.log('suma notas '+suma);
}

function promedioNotas(n, d){
    resultado = 0;
    resultado = cargarNotas(v,dim)/dimensionArreglo;
    
    return resultado;
}

