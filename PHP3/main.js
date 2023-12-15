const express = require('express');
const app = express();
const path = require('path');
const { serialize } = require('v8');

app.use(express.urlencoded({ extended: true })); // Парсинг данных из формы
app.use(express.json()); // Парсинг JSON данных

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
                // inp.value = "";
                res.send('Делить на ноль нельзя');
                return;
            }
    inp = eval(inp);
    res.send(`${inp}`);
})

app.listen(5000);
