function sumarValores(valores) {
    if (valores.length == 0)
        throw new Error('No se pueden sumar los valores de un arreglo vacío');
    var sumaTotal = 0;
    for (var i = 0; i < valores.length; i++)
        sumaTotal += valores[i];
    return sumaTotal;
}
var valores = [];
//valores.push(1,2)
var resultado;
try {
    resultado = sumarValores(valores);
}
catch (error) {
    console.log(error.message);
    console.log('Ocurrió un error esperado, seteando resultado en 0');
    resultado = 0;
}
console.log(resultado);
