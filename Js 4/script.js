let users = [];

let cats = [
    {name:"Tomas", color: "Black", sex: "M", age: 1},
    {name:"Rodion", color: "Green", sex: "M", age: 4},
    {name:"Samanta", color: "Blue", sex: "F", age: 3},
    {name:"Katya", color: "Orange", sex: "F", age: 6}
];

let arr = [1,2,3,4,5,6];

function add()
{
    let name = document.getElementById("one_name").value;
    let age = document.getElementById("one_age").value;
    if (name == null || age == null)
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
    if (i == 5)
        return s;
    i++;
    return sum_3(i,s * arr[i]);
}

function three()
{
    alert(sum_3(0,1));
}

function sum_4(arr_,i)
{
    if (i == 6)
        return arr_;
    for(let j = i-1; j >= 0; j--)
    {
        arr_[i] += arr[j];
    }
    i++;
    return sum_4(arr_,i);
}

function four()
{
    let arr_ = [];
    for(let i = 0; i < arr.length; i++)
    {
        arr_[i] = arr[i];
    }
    arr_ = sum_4(arr_,0);
    alert(arr_);
}

function range(a,b,c)
{
    let arr = [];
    for(let i = a; i <= b; i++)
    {
        if (i != c)
            arr.push(i);
    }
    return arr;
}

function five()
{
    let a = document.getElementById("five_one").value;
    let b = document.getElementById("five_two").value;
    let c = document.getElementById("five_three").value;
    alert(range(a,b,c));
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
            if (ob.name == i.name)
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