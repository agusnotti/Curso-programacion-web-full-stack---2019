let compras = new Array();
let i = 0;


function agregarCompra(){
    let valor =document.getElementById("compras").value;
    if (valor != null && valor != ""){
        compras[i]= valor;
        i++;
        document.getElementById("listaCompras").innerHTML += valor;
    }
}

function sumarCompra(){
    let totalCompras = 0;
    for (let index = 0; index < compras.length; index++) {
        totalCompras += compras[index]; 
    }
    document.getElementById("out").innerHTML = totalCompras;
}