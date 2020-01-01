let potencia;

for (let num = 1; num <= 100; num++) {
    potencia = calcPotencia(num);
    console.log (num +' al cuadrado es ' +potencia);
} 

function calcPotencia (numero){
    let potencia;
    potencia = numero**2;
    return potencia;
}
     
