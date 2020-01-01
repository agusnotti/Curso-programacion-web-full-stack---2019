let jsCalendar = require('js-calendar');
let jsCal = new jsCalendar.Generator({onlyDays: true});
let rl=require('readline-sync');
let year= rl.questionInt('ingrese ano: ');
let month = rl.questionInt('ingrese el numero del mes ');

let cantDiasMes = obtenerDiasMes(year, month);
console.log('la cantidad de dias del mes '+month+' es '+cantDiasMes);

function obtenerDiasMes(year, month){
    let diasMes = jsCal(year, (month-1));
    let totalDays = diasMes.daysInMonth;
    return totalDays;
}