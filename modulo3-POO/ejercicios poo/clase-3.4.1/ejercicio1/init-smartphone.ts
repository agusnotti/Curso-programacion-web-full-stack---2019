import Smartphone from "./Smartphone";

let miSmartphone: Smartphone = new Smartphone();
let numero = '+542494598587';

miSmartphone.prender();
console.log(miSmartphone);

miSmartphone.llamar(numero);

miSmartphone.apagar();
console.log(miSmartphone);
