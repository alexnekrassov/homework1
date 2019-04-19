'use strict';

let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let monthMoney = prompt("Введите обязательную статью расходов в этом месяце");
let grandTotal = prompt("Во сколько обойдется?");
let appData = {
    moneyData: money,
    timeData: time,
    expenses: {
        expenses: monthMoney + ":" + grandTotal
    },
    optionalExpenses: '',
    income: '',
    savings: false

};



alert ("Ваш бюджет на 1 день = " + money/30);