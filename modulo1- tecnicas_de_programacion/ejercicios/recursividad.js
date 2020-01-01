

//recursividad: se invoca a la misma a la misma funcion que cree para resolver un problema.
function factorial (j){
    if (j <= 1){
        return j;
    } else {
        return j * factorial (j-1);
    }
}
console.log (factorial(4));