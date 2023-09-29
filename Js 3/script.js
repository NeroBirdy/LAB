let life = 0;
let ans;

function getRandomInt(max) {
    a = Math.floor(Math.random() * max)
    if (a == 0)
        a = getRandomInt(10);
    return a;
  }

function getOperation(max) {
    a = Math.floor(Math.random() * max);
    if (a == 0)
        a = getOperation(4);
    return a;
}

function gen_pr()
{
    let opr = getOperation(4);
    let f = getRandomInt(10);
    let s = getRandomInt(10);
    if (opr == 1)
    {
        ans = f + s;
        document.getElementById("pr").textContent = `${f} + ${s}`;
    }
    else if (opr == 2)
    {
        ans = f - s;
        document.getElementById("pr").textContent = `${f} - ${s}`;
    }
    else if (opr == 3)
    {
        ans = Math.floor(f / s);
        document.getElementById("pr").textContent = `${f} / ${s}`;
    }
    else if (opr == 4)
    {
        ans = f * s;
        document.getElementById("pr").textContent = `${f} * ${s}`;
    }
}

function check()
{
    if (document.getElementById("inp").value != ans)
    {
        life--;
        document.getElementById("life").textContent = life;
        if (life == 0)
        {
            document.getElementById("pr").textContent = "Введите количество жизней";
            document.getElementById("start").style.display = "inline";
            document.getElementById("continue").style.display = "none";
            alert("Вы проиграли");
            return;
        }
    }
    else
        gen_pr();
}

function cover()
{
    let s = "";
    let h = 5;
    let w = 4;
    for(let i = 0; i < h; i++)
    {
        for(let j = i; j >= 0;j--)
        {
            if (j == 0 || j == i)
            {
                s+="#";
            }
            else
            {
                s+="0";
            }
        }
        s+="\n";
    }
    for(let i = 0; i < h; i++)
    {
        for(let j = i; j < w;j++)
        {
            if (j == i || j == w - 1)
            {
                s+="#";
            }
            else
            {
                s+="0";
            }
        }
        s+="\n";
    }
    document.getElementById("target").value = s;
}

function two()
{
    let arr = document.getElementById("inp_2").value.replace(/ /g,'').replace(/,{2,}/g,',').split(",");
    if(arr[0] == '')
    {
        arr.splice(0,1)
    }
    if(arr[arr.length - 1] == '')
    {
        arr.splice(arr.length - 1,1)
    }
    console.log(arr)
    if (!arr.length)
    {
        alert("Введите массив");
        return;
    }
    
    for(i = 0; i < arr.length; i++)
    {
        arr[i] = parseInt(arr[i]);
        if(arr[i] == NaN)
        {
            arr.splice(i,1);
        }
    }

    document.getElementById("inp_2").value = arr;

    for(i of arr)
    {
        if (i % 2 != 0)
        {
            document.getElementById("check_two").textContent = "false";
            return;
        }
    }
    document.getElementById("check_two").textContent = "true";
}

function four()
{
    let n = document.getElementById("inp_4").value;
    if (n == 0 || n == null)
    {
        alert("Введите количество грузовиков")
        return;
    }
    let sum = 0;
    for(let i = 1; i <= n ; i++) {
        sum += 100 / i;
    }
    alert(parseInt(sum) + " км");
}


function five()
{
    let count = 0;
    let a = parseInt(document.getElementById("inp_5").value);
    for(let i = 0; i <= a; i ++)
    {
        let j = i.toString();
        for(k of j)
        {
            if (k == 2)
            {
                count++;
            }
        }
    }
    alert(count);
}

function six()
{
    let f = document.getElementById("first").value;
    let s = document.getElementById("second").value;
    if (f.length != s.length)
    {
        alert("false");
        return;
    }
    for(i of f)
    {
        f = f.replace(i,"");
        s = s.replace(i,"");
    }
    if (f != s)
    {
        alert("false");
        return;
    }

    alert("true");
}

function seven()
{
    if (document.getElementById("inp").value == null)
    {
        alert("Введите количество жизней");
        return;
    }
    life = document.getElementById("inp").value;
    if (life <= 0)
    {
        alert("Количество жизней не может быть отрицательным или равно нулю");
        return;
    }
    document.getElementById("life").textContent = life;
    document.getElementById("start").style.display = "none";
    document.getElementById("continue").style.display = "inline";
    gen_pr();
}

