//formas de vincular una nueva fila que cree

let nuevafila = document.createElement("div");
nuevafila.id="fila1";
let filaanterior = document.getElementById("lista");
nuevafila.parentElement=filaanterior;

let hermanaprevia = document.getElementById("lista").lastElementChild;
nuevafila.parentElement=hermanaprevia.parentElement;

hermanaprevia.parentElement.appendChild(nuevafila)
