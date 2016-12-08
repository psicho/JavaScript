"use strict";

console.log('Домашнее задание 6:');
console.log('\nФункция arrayToList:');
function arrayToList(arr) {

}
console.log();

console.log('\nФункция преобразования числа в объект:');
function trunsNumber(num) {
    var sot, des, edi;
    var numberObject = {
        'сотни': '',
        'десятки': '',
        'единицы': ''
    };
//    console.log(numberObject);
    if (num < 0 || num > 999 || typeof(num) != 'number') {
        console.log('Введено неправильное значение "' +num + '". Введите число от 0 до 999.\n')
        return numberObject;
    } else {
        sot = Math.floor(num / 100);
        numberObject['сотни'] = sot;
        des = Math.floor((num - sot*100) / 10);
        numberObject['десятки'] = des;
        edi = Math.floor((num - sot*100 - des*10));
        numberObject['единицы'] = edi;
    }
    return numberObject;
}

console.log(trunsNumber(911));

console.log('\n*Функция преобразования объекта в строку:');
function objectToQueryString(object) {
    var i, query;
    query = '';
    for (i in object) {
        query += "&" + i + "=" + object[i];
    }
    return query.substring(1,query.length);
}

console.log(objectToQueryString({user: 'Dmitry', password:
'pass', id:1}));
