//"use strict";

console.log('Домашнее задание 7:');


window.onload = function () {
    console.log('\nШахматная доска без фигур:');
    function chess () {
        var div = document.createElement('div');
        var table = document.createElement('table');
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        div.innerHTML = 'Шахматная доска без фигур:<br><br>'
        document.body.appendChild(div);
        table.innerHTML = '<tr><td><td>A<td>B<td>C<td>D<td>E<td>F<td>G<td>H</td></td></td></td></td></td></td></td></tr><tr><td>1<td><td><td><td><td><td><td><td></td></td></td></td></td></td></td></td></tr><tr><td>2<td><td><td><td><td><td><td><td></td></td></td></td></td></td></td></td></tr><tr><td>3<td><td><td><td><td><td><td><td></td></td></td></td></td></td></td></td></tr><tr><td>4<td><td><td><td><td><td><td><td></td></td></td></td></td></td></td></td></tr><tr><td>5<td><td><td><td><td><td><td><td></td></td></td></td></td></td></td></td></tr><tr><td>6<td><td><td><td><td><td><td><td></td></td></td></td></td></td></td></td></tr><tr><td>7<td><td><td><td><td><td><td><td></td></td></td></td></td></td></td></td></tr><td>8<td><td><td><td><td><td><td><td></td></td></td></td></td></td></td></td></tr>';
        document.body.appendChild(table);

        var tdsearch = document.getElementsByTagName('td')
        var trsearch = document.getElementsByTagName('tr')
        var j = 0;

            for (var i = 1; i < tdsearch.length; i++) {
                j++;
                if (tdsearch[j].innerText === '') {
                    if (i % 2 != 0) {
                        tdsearch[j].style.background = 'black';
                    }
                    if (i == 7) {
                        i++
                    }
            }
        }
    }

    console.log('\nШахматная доска c фигурами:');
    function chess1 () {
        var div = document.createElement('div');
        var table = document.createElement('table');
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        div.innerHTML = '<br><br>Шахматная доска c фигурами:<br><br>'
        document.body.appendChild(div);
        table.innerHTML = '<tr><td>|<td>A<td>B<td>C<td>D<td>E<td>F<td>G<td>H</td></td></td></td></td></td></td></td></tr><tr><td>1<td>&#9814;<td>&#9816;<td>&#9815;<td>&#9813;<td>&#9812;<td>&#9815;<td>&#9816;<td>&#9814;</td></td></td></td></td></td></td></td></tr><tr><td>2<td>&#9817;<td>&#9817;<td>&#9817;<td>&#9817;<td>&#9817;<td>&#9817;<td>&#9817;<td>&#9817;</td></td></td></td></td></td></td></td></tr><tr><td>3<td><td><td><td><td><td><td><td></td></td></td></td></td></td></td></td></tr><tr><td>4<td><td><td><td><td><td><td><td></td></td></td></td></td></td></td></td></tr><tr><td>5<td><td><td><td><td><td><td><td></td></td></td></td></td></td></td></td></tr><tr><td>6<td><td><td><td><td><td><td><td></td></td></td></td></td></td></td></td></tr><tr><td>7<td>&#9823;<td>&#9823;<td>&#9823;<td>&#9823;<td>&#9823;<td>&#9823;<td>&#9823;<td>&#9823;</td></td></td></td></td></td></td></td></tr><td>8<td>&#9820;<td>&#9822;<td>&#9821;<td>&#9819;<td>&#9818;<td>&#9821;<td>&#9822;<td>&#9820;</td></td></td></td></td></td></td></td></tr>';
        document.body.appendChild(table);

        var tdsearch = document.getElementsByTagName('td')
        var trsearch = document.getElementsByTagName('tr')
        var j = 0;

            for (var i = 1; i < tdsearch.length; i++) {
                j++;
                if (tdsearch[j].innerText == '') {
                    if (i % 2 != 0) {
                        tdsearch[j].style.backgroundColor = 'black';
                    }
                if (i == 7) {
                        i++
                    }

            }
        }
    }
    chess();
    chess1();
}


