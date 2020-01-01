let btnAgregar = document.querySelector("#btnAgregar");
btnAgregar.addEventListener("click", agregar);
let btnTotal = document.querySelector("#btnTotal");
btnTotal.addEventListener("click", sumar);

let compras = [];
load();

function agregar() {
    console.log("Funcion Agregar");
    let producto = document.querySelector('#producto').value;
    let precio =parseInt(document.querySelector('#precio').value);
    let renglon = {
        "producto":producto,
        "precio":precio 
    }
    compras.push(renglon);
    mostrarTablaCompras();
}

function sumar() {
    console.log("Funcion Sumar");
    let total = 0;
    for (let i = 0; i <  compras.length; i++) {
        total += compras[i].precio; 
    }
    let max = compras[0].precio;
    for (let r of compras) {
        if(max <  r.precio)max = r.precio; 
    }
    document.querySelector("#total").innerHTML ="<p>Total: $" + total + "</p>"+"<p>Maximo: $" + max + "</p>";


    /*document.querySelector("#total").innerHTML =`
        <p>Total: $ ${total} </p>
        <p>Maximo: $ ${max} </p>
    `;*/
}

function mostrarTablaCompras() {
    let html = "";
    for (let r of compras) {
        html += `           
            <tr>               
                <td>${r.producto}</td>               
                <td>${r.precio}</td>           
            </tr>       
        `;   
    }
    document.querySelector("#tblCompras").innerHTML = html;
}

async function load() {
    document.querySelector("#tblCompras").innerHTML = "<h1>Cargando...</h1>";
    try {
        //VERSION 1 levantar json mockeado
        let r = await fetch("/js/mock.json");
        
        //VERSION 2 levantar respuesta de endpoint generado para listar productos
        //let r = await fetch("/productos");

        if (r.ok){
           let json = await r.json();
            compras = json.compras;
            console.log(json); 
            setTimeout(function(){ mostrarTablaCompras() }, 3000);
            //mostrarTablaCompras();
        } else {
            document.querySelector("#tblCompras").innerHTML = "<h1>error...</h1>";
        }
        
    } catch (err) {
        alert(err.message);
        document.querySelector("#tblCompras").innerHTML = "<h1>error de conexion...</h1>";
    }
}