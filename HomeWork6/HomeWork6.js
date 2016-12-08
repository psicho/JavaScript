"use strict";

console.log('Домашнее задание 6:');
console.log('\nФункция arrayToList:');

function arrayToList(arr) {
    var i, ArrtoObj = {};
    for (i in arr) {
        ArrtoObj['value'] = i;
        console.log(ArrtoObj);
        ArrtoObj['rest'] = ArrtoObj;
        console.log(ArrtoObj);
    }
}
var arr = [1,2,3]
console.log(arrayToList([1,2,3]));
