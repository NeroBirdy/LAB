inp = document.getElementById("inp");

function add_el(el)
{
    temp = inp.value[inp.value.length - 1];
    if (el == "+" || el == "-" || el == "*" || el == "/")
    {
        if (inp.value == "")
            return;
        if (temp == "+" || temp == "-" || temp == "*" || temp == "/" || temp == ".")
        {
            inp.value = inp.value.slice(0,inp.value.length - 1); 
        }
        inp.value += el;
    }
    else if (el == ".")
    {
        if (inp.value == "" || temp == "+" || temp == "-" || temp == "*" || temp == "/" || temp == ".")
            return;
        inp.value += el;
    }
    else
    {
        temp2 = inp.value[inp.value.length - 2];
        if(temp == "0" && (temp2 == "+" || temp2 == "-"|| temp2 == "*" || temp2 == "/" || inp.value.length == 1))
        {
            return;
        }
        inp.value += el;
    }
}

function Eval()
{
    regex =  new RegExp('/0');
    temp = inp.value[inp.value.length - 1];
        if (temp == "+" || temp == "-" || temp == "*" || temp == "/")
        {
            inp.value = inp.value.slice(0,inp.value.length - 1); 
        }
        if(regex.test(inp.value))
            {
                inp.value = "";
                alert("Делить на ноль нельзя");
                return
            }
    inp.value = eval(inp.value);
}

function DEL()
{
    inp.value = inp.value.slice(0,inp.value.length - 1);
}

function C()
{
    inp.value = "";
}
