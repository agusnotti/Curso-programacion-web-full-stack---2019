let btnAgregar = document.querySelector("#btnAgregar");
btnAgregar.addEventListener("click", agregar);
let btnEnvioEditar = document.querySelector("#btnEnvioEditar");
btnEnvioEditar.addEventListener("click", envioEditar);

let vehiculos = [];

async function load(){  
  let r = await fetch("/vehiculos");
  let json = await r.json();
  vehiculos = json;  
  mostrarTablaVehiculos();
}

load();

async function agregar() {
  console.log("Funcion Agregar");
  let patente = document.querySelector('#patente').value;
  let modelo = document.querySelector('#modelo').value;
  let anio = parseInt(document.querySelector('#anio').value);
  let marca = document.querySelector('#marca').value;
  let precio = parseInt(document.querySelector('#precio').value);
  let capacidad = parseInt(document.querySelector('#capacidad').value);
  let tipoVehiculo = document.querySelector('input[name="tipoVehiculo"]:checked').value;

  let renglon = {
    "patente": patente,
    "modelo": modelo,
    "anio": anio,
    "marca": marca,
    "precio": precio,
    "capacidad": capacidad,
    "tipoVehiculo": tipoVehiculo
  }
  
  vehiculos.push(renglon);
  mostrarTablaVehiculos();
  let response = await fetch("/vehiculos", {
    "method": "POST",
    "headers": {
      "Content-Type": "application/json"
    },
    "body": JSON.stringify(renglon)
  })
  if(response.ok) {
    let json = await response.text();
    if(json != "ok")
    {
      // alert("error en datos");
      vehiculos.pop();
      mostrarTablaVehiculos();
    }
  }
}

function mostrarTablaVehiculos() {
    html = "";
    for (let i = 0; i < vehiculos.length; i++) {
        let r = vehiculos[i];
        html += `
            <tr>
                <td>${r.tipoVehiculo}</td>
                <td>${r.patente}</td>
                <td>${r.modelo}</td>
                <td>${r.anio}</td>
                <td>${r.marca}</td>
                <td>${r.precio}</td>
                <td>${r.capacidad}</td>
                <td><button class="btn-editar-vehiculo" pos="${i}">Editar</button></td>
                <td><button class="btn-delete-vehiculo" pos="${i}">Borrar</button></td>
            </tr>
        `; //la comilla es el acento inverso
    }

    document.querySelector("#tblVehiculos").innerHTML = html;
    let botonesEditar = document.querySelectorAll(".btn-editar-vehiculo");
    botonesEditar.forEach(e => {
      e.addEventListener("click", btnEditarClick);
    }); 
    let botonesBorrar = document.querySelectorAll(".btn-delete-vehiculo");
    botonesBorrar.forEach(e => {
      e.addEventListener("click", btnBorrarClick);
    }); 
}

async function btnBorrarClick(){
  let pos = this.getAttribute("pos");
  console.log(this)
  console.log(pos);
  let response = await fetch(`/vehiculos/${pos}`, {
    "method": "DELETE",
    "headers": {
      "Content-Type": "application/json"
    }
  })
  load();
}

async function btnEditarClick(){
  let pos = this.getAttribute("pos");
  let r = await fetch("/vehiculos/"+pos);
  let json = await r.json();

  document.querySelector('#patente').value = json.patente;
  document.querySelector('#modelo').value = json.modelo;
  document.querySelector('#anio').value = json.anio;
  document.querySelector('#marca').value = json.marca;
  document.querySelector('#precio').value = json.precio;
  document.querySelector('#capacidad').value = json.capacidad;
  document.querySelector('input[name="tipoVehiculo"]:checked').value = json.tipoVehiculo;
  document.querySelector('#pos-elem').value = pos;
  document.querySelector('#btnEnvioEditar').classList.remove("oculto");
  document.querySelector('#btnAgregar').classList.add("oculto");
}

async function envioEditar(){
  document.querySelector('#btnEnvioEditar').classList.add("oculto");
  document.querySelector('#btnAgregar').classList.remove("oculto");
  let patente = document.querySelector('#patente').value;
  let modelo = document.querySelector('#modelo').value;
  let anio = parseInt(document.querySelector('#anio').value);
  let marca = document.querySelector('#marca').value;
  let precio = parseInt(document.querySelector('#precio').value);
  let capacidad = parseInt(document.querySelector('#capacidad').value);
  let tipoVehiculo = document.querySelector('input[name="tipoVehiculo"]:checked').value;

  let renglon = {
    "patente": patente,
    "modelo": modelo,
    "anio": anio,
    "marca": marca,
    "precio": precio,
    "capacidad": capacidad,
    "tipoVehiculo": tipoVehiculo
  }
  let pos = document.querySelector('#pos-elem').value;
  let response = await fetch(`/vehiculos/${pos}`, {
    "method": "PUT",
    "headers": {
      "Content-Type": "application/json"
    },
    "body": JSON.stringify(renglon)
  })
  load();
}
