import * as jsCalendar from './node_modules/js-calendar';
import * as rl from 'readline-sync';
let jsCal = new jsCalendar.Generator({onlyDays: true});
let year:number= rl.questionInt('ingrese ano: ');
let month:number = rl.questionInt('ingrese el numero del mes ');

let cantDiasMes:number = obtenerDiasMes(year, month);
console.log('la cantidad de dias del mes '+month+' es '+cantDiasMes);

function obtenerDiasMes(year, month):number{
    let diasMes=jsCal(year, (month-1));
    let totalDays:number = diasMes.daysInMonth;
    return totalDays;
}