const readline = require('readline-sync');

// let m = readline.question('m: ');
// let k = readline.question('k: ');

// let s_m = sum(1,m,0);
// let s_k = sum(1,2*k,0);
// console.log(s_m + s_k)


function sum(i,b,s)
{
    if (i <= b)
    {
        s+=i;
        i++;
        return sum(i,b,s)
    }
    return s;
}

let n = readline.question('n: ');

console.log(print(1,n));

function print(i,n)
{
    if (i <= n)
    {
        let s = "";
        for (let j = i; j > 0 ; j--)
        {
            s+=j + " ";
        }
        console.log(s);
        i++;
        return print(i,n)
    }
}