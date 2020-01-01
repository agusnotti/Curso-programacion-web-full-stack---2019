let btnAgregar = document.querySelector("#btnAgregar");
btnAgregar.addEventListener("click", agregar);
let btnEliminar = document.querySelector("#btnEliminar");
btnEliminar.addEventListener("click", eliminar);
let btnModificar = document.querySelector("#btnModificar");
btnModificar.addEventListener("click", modificar);
let btnConsultar = document.querySelector("#btnConsultar");
btnConsultar.addEventListener("click", posicion);

let chkSelTodos = document.querySelector("#chkSelTodos")
chkSelTodos.addEventListener("click",seldesel)

let btnTotal = document.querySelector("#btnTotal");
btnTotal.addEventListener("click", sumar);
let compras = [];
load();

function agregar() {
    console.log("Funcion Agregar");
    let producto = document.querySelector('#producto').value;
    let precio = parseInt(document.querySelector('#precio').value);
    let descripcion = document.querySelector('#descripcion').value;
    let iva = parseFloat(document.querySelector('#iva').value);
    document.querySelector('#producto').value="";
    document.querySelector('#precio').value="";
    document.querySelector('#descripcion').value="";
    document.querySelector('#iva').value="";
    let renglon = {
        "producto": `${producto}`,
        "precio": `${precio}`,
        "descripcion": `${descripcion}`,
        "iva": `${iva}`
    };
    if (agregarAServidor(renglon)) 
        load();
    else
        alert ("Error grabando en servidor");
}

function eliminar() {
    console.log("Funcion Eliminar");
    let checks = document.getElementsByClassName("idx");
    for (let c of checks) {
        if (c.checked) {
            let renglon = {
                "producto": `${c.value}`,
                "precio": `0`,
                "descripcion": ``,
                "iva": `0`
            };
            if (!eliminarDeServidor(renglon)) 
                alert ("Error eliminando en servidor");
        }
    }
    load();
}

function modificar() {
    console.log("Funcion Modificar");
    let precio = parseInt(document.querySelector('#precio').value);
    let descripcion = document.querySelector('#descripcion').value;
    let iva = parseFloat(document.querySelector('#iva').value);
    document.querySelector('#producto').value="";
    document.querySelector('#precio').value="";
    document.querySelector('#descripcion').value="";
    document.querySelector('#iva').value="";
    let checks = document.getElementsByClassName("idx");
    for (let c of checks) {
        if (c.checked) {
            let renglon = {
                "producto": `${c.value}`,
                "precio": `${precio}`,
                "descripcion": `${descripcion}`,
                "iva": `${iva}`
            };
            if (!modificarEnServidor(renglon)) 
                alert ("Error modificando en servidor");
        }
        break;
    }
    load();
}

function sumar() {
    console.log("Funcion Sumar");
    let total = 0;
    let totalconiva = 0;
    for (let i = 0; i <  compras.length; i++) {
        total += parseInt(compras[i].precio);
        totalconiva += parseInt(compras[i].precio)*(1+(parseFloat(compras[i].iva)/100));
    }
    let max = compras[0].precio;
    for (let r of compras) {
        if(max <  r.precio)
            max = r.precio;
    }
    document.querySelector("#total").innerHTML = `<p>Total: $ ${total} Total con IVA: $ ${totalconiva} Maximo: $ ${max}</p>`;
}

function seldesel () {
    let checks = document.getElementsByClassName("idx");
    for (let c of checks) {
        if (c.checked) 
            c.checked = false;
        else
            c.checked = true;
    }
}

function mostrarTablaCompras() {
    html = "";
    let i=0;
    for (let r of compras) {
        console.log(r);
        html += `
            <tr>
                <td class="sel"><input type="checkbox" class="idx" name="" value="${r.producto}"></td>
                <td class="txt">${r.producto}</td>   
                <td class="num">${r.precio}</td>     
                <td class="txt">${r.descripcion}</td>
                <td class="num">${r.iva}</td>        
            </tr>`; 
        i++;
    }
    document.querySelector("#tblCompras").innerHTML = html;
}

async function load() {
    try {
        let r = await fetch("/productos");
        let json = await r.json();
        compras = json;
        mostrarTablaCompras();
    } catch (err) {
        alert(err.message);
    }
}

async function posicion() {
    let pos = document.querySelector('#posicion').value;
    let url = "";
    if (pos != "") {
        url = `/productos/${parseInt(pos)}`;
    } else {
        url = "/productos";
    }
    try {
        let r = await fetch(url);
        let json = await r.json();
        if (pos != "") {
            compras=[];
            compras.push(json);
        } else {
            compras = json;
        }
        mostrarTablaCompras();
    } catch (err) {
        alert(err.message);
    }
}

async function agregarAServidor(registro) {
    let r = await fetch("/productos", { "method": "POST", "headers": { "Content-Type": "application/json" }, "body": JSON.stringify(registro) })
    return (r.ok);
}
async function eliminarDeServidor(registro) {
    let r = await fetch("/productos", { "method": "DELETE", "headers": { "Content-Type": "application/json" }, "body": JSON.stringify(registro) })
    return (r.ok);
}
async function modificarEnServidor(registro) {
    let r = await fetch("/productos", { "method": "PUT", "headers": { "Content-Type": "application/json" }, "body": JSON.stringify(registro) })
    return (r.ok);
}

