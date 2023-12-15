inp = document.getElementById("inp");

let numbers = [1,2,3,4,5,6,7,8,9];

let sign = ["+","-","*","/"];

let signNdot = ["+","-","*","/","."];

function add_el(el)
{
    temp = inp.value[inp.value.length - 1];
    if (sign.includes(el))
    {
        if (inp.value == "")
            return;
        if (sign.includes(temp))
        {
            inp.value = inp.value.slice(0,inp.value.length - 1); 
        }
        inp.value += el;
    }
    else if (el == ".")
    {
        if (inp.value == "" || signNdot.includes(temp))
            return;
        let cnt = false;
        for (let i = inp.value.length - 1; i >= 0; i--)
        {
            if (sign.includes(inp.value[i]))
                break;
            else if (inp.value[i] == ".")
            {
                cnt = true;
                break;
            }
        }
        if (!cnt)
            inp.value += el;
    }
    else if (inp.value.length == 1 & inp.value[0] == 0)
    {
        if (numbers.includes(el))
        {
            inp.value = el;
        }
    }
    else
    {
        temp2 = inp.value[inp.value.length - 2];
        if(temp == "0" && sign.includes(temp2))
        {
            if (el == "0")
                return;
            else if (numbers.includes(el))
            {
                inp.value = inp.value.slice(0,inp.value.length - 1); 
            }
        }
        inp.value += el;
    }
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
