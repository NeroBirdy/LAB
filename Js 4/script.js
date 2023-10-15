let users = [];

let cats = [
    {name:"Tomas", color: "Black", sex: "M", age: 1},
    {name:"Rodion", color: "Green", sex: "M", age: 4},
    {name:"Samanta", color: "Blue", sex: "F", age: 3},
    {name:"Katya", color: "Orange", sex: "F", age: 6}
];

let arr = [];

function add()
{
    let name = document.getElementById("one_name").value;
    let age = document.getElementById("one_age").value;
    if (name == "" || age == "")
    {
        alert("Вы что-то не вписали");
        return;
    }
    users.push({name: name, age: age});
}

function one()
{
    let s = "";
    for(i of users)
    {
        s += `Имя: ${i.name} Возраст: ${i.age}\n`;
    }
    alert(s);
}

function two()
{
    let place = document.getElementById("two");
    if(place.childNodes.length == 4)
    {
        alert("Уже вывели")
        return;
    } 
    let table = document.createElement("table");

    let headers = document.createElement("tr");

    let h = ["Name","Color","Sex","Age"];
    for(let i = 0; i < 4; i++)
    {
        let cell = document.createElement("td");
        cell.innerHTML = h[i];
        headers.appendChild(cell);
    }
    table.appendChild(headers);
    for(let i = 0; i < 4; i++)
    {
        headers = document.createElement("tr");
        for(let j = 0; j < 4; j++)
        {
            let cell = document.createElement("td");
            if (j==0)
                cell.innerHTML = cats[i].name;
            if (j==1)
                cell.innerHTML = cats[i].color;
            if (j==2)
                cell.innerHTML = cats[i].sex;
            if (j==3)
                cell.innerHTML = cats[i].age;
            headers.appendChild(cell);
        }
        table.appendChild(headers);
    }

    place.appendChild(table);
}

function sum_3(i,s)
{
    if (i == arr.length - 1)
        return s;
    i++;
    return sum_3(i,s * arr[i]);
}

function three()
{   
    arr = document.getElementById("inp_3").value.replace(/ /g,'').replace(/,{2,}/g,',').split(",");
    if(arr[0] == '')
    {
        arr.splice(0,1)
    }
    if(arr[arr.length - 1] == '')
    {
        arr.splice(arr.length - 1,1)
    }
    console.log(arr);
    document.getElementById("inp_3").value = arr;
    alert(sum_3(0,1));
}

function sum_4(arr_,i)
{
    if (i == arr.length)
        return arr_;
    for(let j = i-1; j >= 0; j--)
    {
        arr_[i] = parseInt(arr_[i]) + parseInt(arr[j]);
    }
    i++;
    return sum_4(arr_,i);
}

function four()
{
    arr = document.getElementById("inp_4").value.replace(/ /g,'').replace(/,{2,}/g,',').split(",");
    if(arr[0] == '')
    {
        arr.splice(0,1)
    }
    if(arr[arr.length - 1] == '')
    {
        arr.splice(arr.length - 1,1)
    }
    console.log(arr);
    let arr_ = [];
    for(let i = 0; i < arr.length; i++)
    {
        arr_[i] = arr[i];
    }
    arr_ = sum_4(arr_,0);
    document.getElementById("inp_4").value = arr;
    alert(arr_);
}

function range(a,b,c)
{
    let arr = [];
    if (c > 0 && a < b)
    {
        for(let i = a; i <= b; i+=c)
        {
            arr.push(i);
        } 
    }
    else
    {
        if (a > b && c > 0)
        {
            for(let i = a; i >= b; i-=c)
            {
                arr.push(i);
            } 
        }
        else
        {
            for(let i = a; i >= b; i+=c)
            {
                arr.push(i);
            } 
        }
    }
    
    return arr;
}

function five()
{
    let a = Number(document.getElementById("five_one").value);
    let b = Number(document.getElementById("five_two").value);
    let c = document.getElementById("five_three").value;
    if (a == 0 && b == 0)
    {
        alert("Вы что-то не ввели");
        return;
    }
    if (c == "")
        c = 1;
    else if (c == '0')
    {
        alert("Пусто");
        return;
    }
    let arr = range(a,b,Number(c));
    if (arr.length == 0)
        alert("Пусто");
    else
        alert(arr);
}

function filt(ob)
{
    let arr_ = [];
    for(i of cats)
    {
        let fl1 = true;
        let fl2 = true;
        let fl3 = true;
        let fl4 = true;
        if (ob.name != "")
        {
            if (ob.name != i.name)
                fl1 = false;
        }
        if (ob.color != "")
        {
            if (ob.color != i.color)
                fl2 = false;
        } 
        if (ob.sex != "")
        {
            if (ob.sex != i.sex)
                fl3 = false;
        }  
        if (ob.age != "")
        {
            if (parseInt(ob.age) != i.age)
                fl4 = false;
        }
        if (fl1 && fl2 && fl3 && fl4)
        {
            arr_.push(i);
        }
    }
    if (arr_.length == 0)
    {
        alert("Массив пустой");
        return;
    }
    s = "";
    for (i of arr_)
    {
        s+=`name: ${i.name}, color: ${i.color}, sex: ${i.sex}, age: ${i.age}\n`;
    }
    alert(s);
}

function six()
{
    let name = document.getElementById("inp_6_1").value;
    let color = document.getElementById("inp_6_2").value;
    let sex = document.getElementById("inp_6_3").value;
    let age = document.getElementById("inp_6_4").value;
    let ob = {name: name,color: color,sex: sex, age:age};
    filt(ob);
}