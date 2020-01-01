let btnAgregar = document.querySelector("#btnAgregar");
btnAgregar.addEventListener("click", agregar);

let listaDocumentos = [];


function agregar() {
    console.log("Funcion Agregar");
    let tituloDocumento = document.querySelector('#titulo').value;
    let autor =document.querySelector('#autor').value;
    let tema =document.querySelector('#tema').value;
    let fechaPublicacion=document.querySelector('#fechaPublicacion').value;
    let documento = {
        "titulo":tituloDocumento,
        "autor":autor,
        "tema":tema,
        "fechaPublicacion":fechaPublicacion,
    };
    listaDocumentos.push(documento);
    mostrarListaDocumentos();
    document.querySelector("#nombreAutor").innerHTML = getAutorConMasDocumentos();
}

function mostrarListaDocumentos() {
    let html = "";
    for (let r of listaDocumentos) {
        html += `           
            <tr>               
                <td>${r.titulo}</td>               
                <td>${r.autor}</td>    
                <td>${r.tema}</td>
                <td>${r.fechaPublicacion}</td>       
            </tr>       
        `;   
    }
    document.querySelector("#tblListaDoc").innerHTML = html;
}

function getAutorConMasDocumentos(){
    let contadorAutores=[]; 
    for (let a of listaDocumentos){
        let estaAutor = false;
        for (let b of contadorAutores){
            if (a.autor == b.autor){
                b.cantidad++;
                estaAutor = true;
            }
        }
        if (estaAutor == false){
            let registroAutor= {
                "autor": a.autor,
                "cantidad":1,
            };
            contadorAutores.push(registroAutor);
        }
    }
    let autor = {
        "autor":"",
        "cantidad": 0,
    };
    for (let c of contadorAutores){
        if (c.cantidad > autor.cantidad){
            autor = c;
        }
    }
    return autor.autor;
}




