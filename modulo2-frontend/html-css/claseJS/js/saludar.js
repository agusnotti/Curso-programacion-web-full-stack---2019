let contador = 0;
const cantidad = 1;

function saludar(){
    "use strict"//vuelve obligatoria la declaracion de variables. se pone en cada ambito
    contador+=cantidad;
    console.log("hola!! hiciste click "+ contador + " veces");
    alert("le sumaste "+ cantidad); 
}

function saludarNombre() {
    let n= document.querySelector("#in-nombre").value;
    console.log(n);
    document.querySelector("#out").innerHTML = n;
}





