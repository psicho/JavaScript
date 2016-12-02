"use strict";

console.log('Домашнее задание 4:');
var a, b, c;
console.log('\n 1. Создание функции min(): ');
function min(a,b) {
//    var a, b, c;
    c = a < b ? a : b;
    return c;
}
console.log(min(0,-10))


console.log('\n 2. Создание функции countBs(): ');
function countBs(a) {
    var i, n;
    i = 0;
    n = 0;
    while (i < a.length) {
        if (a.charAt(i) === 'B') {
            n++;
        }
        i++;
    }
    return n;
}
console.log(countBs('abcdefBdewsBfdbfdddB'))


console.log('\n 3. Создание функции countChar(): ');
function countChar(a,b) {
    var i, n;
    c = a.length;
    i = 0;
    n = 0;
    while (i < a.length) {
        if (a.charAt(i) === b) {
            n++;
        }
        i++;
    }
    return n;
}
console.log(countChar('abcdefvsadeGEA','d'))

console.log('\n 4. Дополнительное ДЗ*(без -1): ');
function isEven(a) {
    if (a === 1) {
        return true;
    } else if (a === 0){
        return false;
    }
    a = a - 2;
    return isEven(a);
}
console.log(isEven(106));
console.log('\n При задании -1 (или любого другого отрицательного числа) рекурсия в данном варианте начинает ещё более уменьшать значение переменной, при этом превращаясь в бесконечный цикл. Далее происходит переполнение стека вызовов (одновременно запущенных связанных операций) и программа выдаёт ошибку переполнения стека.');

console.log('\n Данная проблема решается разделением вводимых значений на положительные и отрицательные. Отприцательным числам мы задаём рекурсию вида (N + 2), положительным (N - 2):');

console.log('\n 5. Дополнительное ДЗ*(с -1): ');
function isEven1(a) {
    if (a >= 0) {
        if (a === 1) {
            return true;
        } else if (a === 0){
            return false;
        }
        a = a - 2;
    } else {
        if (a === -1) {
            return true;
        } else if (a === 0){
            return false;
        }
        a = a + 2;
    }
    return isEven1(a);
}
console.log(isEven1(-201));
