var money = +prompt("Ваш бюджет на месяц?", 50000);
var time = prompt("Введите дату в формате YYYY-MM-DD", "1989-12-31");

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
};


/*for (let i = 0; i < 2; i++) {

    let item = prompt("введите статью расходов"),
        cost = prompt("во сколько обойдется?");

    if ( (typeof(item))=== 'string' && (typeof(item)) != null && (typeof(cost)) != null 
    && item != '' && cost != '' && item.length < 10) {
        console.log("done");
        appData.expenses[item] = cost;
    }  else {
        i--;
    }
};*/
/*let i = 0;
while (i < 2) {
    let item = prompt("введите статью расходов"),
        cost = prompt("во сколько обойдется?");
        if ( (typeof(item))=== 'string' && (typeof(item)) != null && (typeof(cost)) != null 
    && item != '' && cost != '' && item.length < 10) {
        console.log("done");
        appData.expenses[item] = cost;  
    } else {
        i--;
    }
    i++;            
}*/
let i = 0;
do {
    let item = prompt("введите статью расходов"),
        cost = prompt("во сколько обойдется?");
        if ( (typeof(item))=== 'string' && (typeof(item)) != null && (typeof(cost)) != null && 
        item != '' && cost != '' && item.length < 10) {
        console.log("done");
        appData.expenses[item] = cost;
        
    } else {
        console.log("error");
        i--;
    } i++;
                 
} 
while (i < 2);

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет:" + appData.moneyPerDay);
if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    }   else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    }   else {
        console.log("Произошла ошибка");
    }

console.log(appData);
