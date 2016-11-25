console.log('Домашнее задание 3: ');
var i, j, k;

k = ''
for (i = 1; i <= 7 ; i++) {
    k += '#';
    console.log(k);
}

console.log(' ');
console.log('Доп. ДЗ - Вариант 1: ');
k = ''
// Дополнительное ДЗ
// Вариант 1
for (i = 1; i <= 8 ; i++) {
    for (j = 1; j <= 8 ; j++) {
        if (i % 2 != 0) {
            if (j % 2 != 0) {
                k += '#';
            } else {
                k += ' ';
            }
        } else {
            if (j % 2 == 0) {
                k += '#';
            } else {
                k += ' ';
            }
        }
    }
    console.log(k);
    k = '';
}

console.log(' ');

// Вариант 2
console.log('Доп. ДЗ - Вариант 2: ');
for (i = 1; i <= 8 ; i++) {
    if (i % 2 != 0) {
        k = '# # # # ';
        console.log(k);
    } else {
        k = ' # # # #';
        console.log(k);
    }
}
