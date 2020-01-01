let butacasVacias = 0;

let cineArreglo = new Array (10);

cineArreglo [0] = true;
cineArreglo [1] = false;
cineArreglo [2] = true;
cineArreglo [3] = true;
cineArreglo [4] = false;
cineArreglo [5] = false;
cineArreglo [6] = true;
cineArreglo [7] = false;
cineArreglo [8] = false;
cineArreglo [9] = true;

for (let i = 0; i < 10; i++) {
    if (cineArreglo[i] != true){
        butacasVacias++
    }
}
console.log('cantidad de butacas vacias '+ butacasVacias);