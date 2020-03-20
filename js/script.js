var chbox = document.getElementById('chech');
num2 = +chbox.innerHTML

function func() {
    chbox.innerHTML = num2++

    if (chbox.checked) {
        console.log('box is checked', num2++)

    } else {
        console.log('box is`t checked', num2++)
    }
}


var par = document.getElementById('value');
num1 = par.innerHTML
console.log(typeof par.innerHTML)


btn1.onclick = function () {
    par.innerHTML = num1++
}
btn2.onclick = function () {
    par.innerHTML = num1--
}


function func2() {
    var rng = document.getElementById('r1');
    var div = document.getElementById('test');
    var inp = document.getElementById('i1')
    inp.value = rng.value
    div.style.borderBottomLeftRadius = rng.value+'px'
}































function func1() {
    var sel = document.getElementById('mySelect').selectedIndex;
    var options = document.getElementById("mySelect").options;
    console.log(options[sel].text)
}