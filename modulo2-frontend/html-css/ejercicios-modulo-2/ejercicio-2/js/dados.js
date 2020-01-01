function lanzarDados(){
    let d1 = 0;
    let d2 = 0;
    let cantidad = 0;
    for (let index = 0; index < 1000; index++) {
        d1 = tirarDado();
        d2 = tirarDado();

        if(d1 + d2 == 7){
            cantidad++;
        }
    }
    document.getElementById("out").innerHTML = cantidad;
}

function tirarDado() {
  return Math.round(Math.random() * (6 - 1) + 1);
}

