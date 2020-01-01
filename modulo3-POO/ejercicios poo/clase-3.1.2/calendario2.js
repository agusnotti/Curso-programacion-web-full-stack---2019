"use strict";
exports.__esModule = true;
var jsCalendar = require("./node_modules/js-calendar");
var rl = require("readline-sync");
var jsCal = new jsCalendar.Generator({ onlyDays: true });
var year = rl.questionInt('ingrese ano: ');
var month = rl.questionInt('ingrese el numero del mes ');
var cantDiasMes = obtenerDiasMes(year, month);
console.log('la cantidad de dias del mes ' + month + ' es ' + cantDiasMes);
function obtenerDiasMes(year, month) {
    var diasMes = jsCal(year, (month - 1));
    var totalDays = diasMes.daysInMonth;
    return totalDays;
}
