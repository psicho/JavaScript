"use strict";

console.log('Домашнее задание 4: \n\n');
var a, b, c;
console.log('1. Создание функции min(): ');
function min(a,b) {
//    var a, b, c;
    c = a < b ? a : b;
    return c;
}
console.log(min(0,10))


console.log('2. Создание функции countBs(): ');
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


console.log('3. Создание функции countChar(): ');
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
