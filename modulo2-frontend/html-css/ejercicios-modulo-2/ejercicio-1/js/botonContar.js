let contador = 0;
let valor = 1;

function incrementar(){
    actualizarValor();
    contador+=valor;
    console.log(contador);
    document.querySelector("#contador").innerHTML = contador;
}

function decrementar(){
    actualizarValor();
    contador-=valor;
    console.log(contador);
    document.querySelector("#contador").innerHTML = contador;
}

function actualizarValor(){
    let input = document.getElementById("sumaCantidad").value;
    if(input == null || input == ""){
        valor=1;
    } else {
        valor=parseInt(input);
    }
}


 