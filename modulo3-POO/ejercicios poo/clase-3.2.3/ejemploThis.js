var Auto = /** @class */ (function () {
    function Auto(marca) {
        this.marca = marca;
    }
    Auto.prototype.imprimirAuto = function () {
        console.log();
    };
    return Auto;
}());
var miAuto = new Auto("fiat");
var segundoAuto = new Auto("chevrolet");
miAuto.imprimirAuto();
console.log(miAuto);
segundoAuto.imprimirAuto();
console.log(segundoAuto);
