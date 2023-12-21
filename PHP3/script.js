inp = document.getElementById("inp");

let numbers = [1,2,3,4,5,6,7,8,9];

let sign = ["+","-","*","/"];

let signNdot = ["+","-","*","/","."];

function add_el(el)
{
    fetch('/add_el', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ inp: inp.value, el: el })
    })
    .then(response => response.text())
    .then(data => {
        if (data != "zero")
            inp.value = data;
    });
}

function Eval() 
{
    let inp = document.getElementById('inp');

    fetch('/eval', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ inp: inp.value })
    })
    .then(response => response.text())
    .then(data => {
        if (data != "Делить на ноль нельзя")
            inp.value = data;
        else
        {
            alert("Делить на ноль нельзя");
        }
    });
}

function DEL()
{
    inp.value = inp.value.slice(0,inp.value.length - 1);
}

function C()
{
    inp.value = "";
}
