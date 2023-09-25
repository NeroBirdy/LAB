function first()
{
    let a = document.getElementById("inp").value;
    alert(Math.abs(a))
}

function second()
{
    let a = new Date().toLocaleString();
    let date = a.split(",")[0];
    document.getElementById("second").textContent = date;
}

function third()
{
  let adress = "Георгия Величко 5";
  let count = 3;
  let cost = 10000000;
  let remont = "Косметический";
  alert("Адрес: " + adress + "\n"
  + "Количество комнат: " + count + "\n"
  + "Цена: " + cost + "\n"
  + "Ремонт: " + remont);  
}

function forth()
{
    let fname = document.getElementById("fname").value;
    let sname = document.getElementById("sname").value;
    let tname = document.getElementById("tname").value;
    let age = document.getElementById("age").value;
    if (age < 7 && age > 0)
    {
        alert("Привет, " + tname);
    }
    else if (age <= 18 && age >= 7)
    {
        alert("Здравствуй, " + sname);
    }
    else if (age > 18)
    {
        alert("Здравствуйте, " + fname + " " + tname);
    }
    else
    {
        alert("Ты еще не родился")
    }
}

function fifth()
{
    let fn = document.getElementById("fn").value;
    let sn = document.getElementById("sn").value;
    if (sn != 0)
        alert("Целое число: " + parseInt(fn/sn) + " " + "Остаток: " + parseInt(fn%sn));
    else
        alert("На ноль делить нельзя")
}

function sixth(a,b,c)
{
    let l = document.getElementById("f").value * 100;
    let w = document.getElementById("s").value * 100;
    let h = document.getElementById("t").value * 100;
    let total = 0,len_h = 0,len_l = 0,len_w = 0,cntl = 0,cntw = 0,cnth = 0;
    while(len_l + a <= l)
    {
        if (len_l + a <= l)
        {
            len_l+=a;
            cntl++;
        }
        if (len_l + 5 < l)
        {
            len_l+=5;
        }
    }
    while(len_w + b <= w)
    {
        if (len_w + b <= w)
        {
            len_w+=b;
            cntw++;
        }
        if (len_w + 5 < w)
        {
            len_w+=5;
        }
    }
    while(len_h + c <= h)
    {
        if (len_h + c <= h)
        {
            len_h+=c;
            cnth++;
        }
        if (len_h + 5 < h)
        {
            len_h+=5;
        }
    }

    total = cntl * cntw * cnth;
    return total;
}

function seventh()
{
    let a = document.getElementById("seven").value;
    switch(parseInt(a))
    {
        case 1:
            day = "Понедельник";
            break;
        case 2:
            day = "Вторник";
            break;
        case 3:
            day = "Среда";
            break;
        case 4:
            day = "Четверг";
            break;  
        case 5:
            day = "Пятница";
            break;
        case 6:
            day = "Суббота";
            break;
        case 7:
            day = "Воскесение";
            break;
        default:
            day = "Дней в неделе всего 7";
    }
    alert(day);
}

function eighth()
{
    let cnt = document.getElementById("cnt").value;
    let f,s,t;
    f = sixth(30,50,40);
    s = sixth(50,30,40);
    t = sixth(40,50,30);
    if (Math.max(f,s,t) == 0)
    {
        alert("Коробка слишком большая для вагона(");
        return;
    }
    alert("Понадобится " + Math.ceil(cnt/Math.max(f,s,t)) + " вагон(ов)")
}