const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    // res.sendFile(path.resolve(__dirname,'main.html'));
});

app.post('/eval',(req,res) => {
    let inp = req.body.inp;

    regex =  new RegExp('/0');
    regex1 = new RegExp('/0.[0-9]*[1-9]');
    temp = inp[inp.length - 1];
        if (temp == "+" || temp == "-" || temp == "*" || temp == "/")
        {
            inp = inp.slice(0,inp.length - 1); 
        }
        if(regex.test(inp) && !regex1.test(inp))
            {
                // inp = "";
                res.send('Делить на ноль нельзя');
                return;
            }
    inp = eval(inp);
    res.send(`${inp}`);
})

let numbers = [1,2,3,4,5,6,7,8,9];

let sign = ["+","-","*","/"];

let signNdot = ["+","-","*","/","."];

app.post('/add_el',(req,res) => {
    let inp = req.body.inp;
    let el = req.body.el;
    let temp = inp[inp.length - 1];
    if (sign.includes(el))
    {
        if (inp == "")
            {
                res.send(`zero`);
                return;
            }
        if (sign.includes(temp))
        {
            inp = inp.slice(0,inp.length - 1); 
        }
        inp += el;
        res.send(`${inp}`);
    }
    else if (el == ".")
    {
        if (inp == "" || signNdot.includes(temp))
            {
                res.send(`zero`);
                return;
            }
        let cnt = false;
        for (let i = inp.length - 1; i >= 0; i--)
        {
            if (sign.includes(inp[i]))
                break;
            else if (inp[i] == ".")
            {
                cnt = true;
                break;
            }
        }
        if (!cnt)
            {
                inp += el;
                res.send(`${inp}`);
            }
    }
    else if (inp.length == 1 & inp[0] == 0)
    {
        if (numbers.includes(el))
        {
            inp = el;
            res.send(`${inp}`);
        }
    }
    else
    {
        temp2 = inp[inp.length - 2];
        if(temp == "0" && sign.includes(temp2))
        {
            if (el == "0")
                {
                    res.send(`zero`)
                    return;
                }
            else if (numbers.includes(el))
            {
                inp = inp.slice(0,inp.length - 1); 
            }
        }
        inp += el;
        res.send(`${inp}`);
    }
})

app.listen(5000);
