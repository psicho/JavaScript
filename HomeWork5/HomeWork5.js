"use strict";

console.log('Домашнее задание 5:');
console.log('\nФункция преобразования цвета:');
var HexNum = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
//console.log(HexNum);
function transForm(r = 0, g = 0, b = 0) {
    var i, j, k, colorRGB, r, g, b;
    k = '';
    colorRGB = '#';
//    console.log(typeof(r));
    for (i = 0; i < 16; i++) {
        for (j = 0; j < 16; j++) {
            k = +('0x' + HexNum[i] + HexNum[j]);
//            console.log('k: ' + k);
            if (r === k) {
                r = (HexNum[i] + HexNum[j]);
//                console.log('r: ' + r);
            } else if (r < 0 || r > 255 || (typeof(r) != 'number') && i < 1) {
                return 'Введена неправильная цветовая палитра red = ' + r + ' (укажите число от 0 до 255)';
            }
            if (g === k) {
                g = (HexNum[i] + HexNum[j]);
//                console.log('g: ' + g);
            } else if (g < 0 || g > 255 || typeof(g) != 'number' && i < 1) {
                return 'Введена неправильная цветовая палитра green = ' + g  + ' (укажите число от 0 до 255)';
            }
            if (b === k) {
                b = (HexNum[i] + HexNum[j]);
//                console.log('b: ' + b);
            } else if (b < 0 || b > 255 || typeof(b) != 'number' && i < 1) {
                return 'Введена неправильная цветовая палитра blue = ' + b  + ' (укажите число от 0 до 255)';
            }
        }
    }
    return colorRGB += r + g + b;
}
console.log(transForm(200,50,130));

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
