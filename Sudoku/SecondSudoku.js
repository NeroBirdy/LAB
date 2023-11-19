const {By, Key, Builder} = require("selenium-webdriver")
require("chromedriver")
const readline = require('readline');
let rl = readline.createInterface(process.stdin, process.stdout);

const driver = new Builder().forBrowser('chrome').build();

function isValid(board, row, col, num) {
    for (let x = 0; x < 9; x++) {
        if (board[row][x] === num) {
            return false;
        }
    }

    for (let x = 0; x < 9; x++) {
        if (board[x][col] === num) {
            return false;
        }
    }

    const startRow = 3 * Math.floor(row / 3);
    const startCol = 3 * Math.floor(col / 3);
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i + startRow][j + startCol] === num) {
                return false;
            }
        }
    }

    return true;
}

function findEmptyLocation(board, emptySpot) {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] === '0') {
                emptySpot[0] = row;
                emptySpot[1] = col;
                return true;
            }
        }
    }
    return false;
}

function solveSudoku(board) {
    const emptySpot = [0, 0];

    if (!findEmptyLocation(board, emptySpot)) {
        return true;
    }

    const row = emptySpot[0];
    const col = emptySpot[1];

    for (let num = 1; num <= 9; num++) {
        const numStr = num.toString();
        if (isValid(board, row, col, numStr)) {
            board[row][col] = numStr;

            if (solveSudoku(board)) {
                return true;
            }

            board[row][col] = '0';
        }
    }

    return false;
}

async function solve()
{
    let btn = [];

    btn = await driver.findElements(By.css('li[role = "menuitem"][style = "opacity: 1;"]'));

    let matrix = [[0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0]]

    for(let i = 0; i < 9; i++)
    {
        for(let j = 0; j < 9; j++)
        {
            let grid = await driver.findElement(By.css('.game-grid__cell[data-row = "' + i + '"][data-column = "' + j + '"]'));
            let svg = await grid.findElement(By.css('svg'));
            let text = await svg.findElement(By.css('text')).getAttribute('innerHTML');
            if (text != '')
                matrix[i][j] = text;
            else
                matrix[i][j] = "0";
        }
    }

    solveSudoku(matrix);

    for(let i = 0; i < 9; i++)
    {
        for(let j = 0; j < 9; j++)
        {
            let grid = await driver.findElement(By.css('.game-grid__cell[data-row = "' + i + '"][data-column = "' + j + '"]'));
            grid.click();
            let svg = await grid.findElement(By.css('svg'));
            let text = await svg.findElement(By.css('text')).getAttribute('innerHTML');
            if (text == '')
            {
                btn[parseInt(matrix[i][j]) - 1].click();
            }
        }
    }
    choose();
}

async function choose()
{
    rl.question('Введите команду', (k) => {
    if (k == 1)
    {
        solve();
    }
    else
    {
        driver.quit();
    }
    });
}

async function start()
{
    await driver.get('https://sudokutable.com/');
    choose();
}

start();