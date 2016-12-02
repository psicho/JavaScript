"use strict";

console.log('Домашнее задание 5:');
//var a, b, c;

var transColor = {};
var HexNum = ['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

console.log(HexNum);
var i, j;
for (i = 1; i <= 255; i++) {
    for (j = 0; j < 15; j++) {
        transColor[i] += HexNum[j];
    }

}



console.log(transColor);
