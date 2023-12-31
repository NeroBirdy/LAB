const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true })); // Парсинг данных из формы
app.use(express.json()); // Парсинг JSON данных

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'poisk.html'));
});

app.post('/redirect', (req, res) => {
    let { url, query } = req.body;
    if (!url)
    {
        res.send('Вы не выбрали поисковую систему');
        return;
    }
    if (query)
    {
        if (url == "https://yandex.ru")
        {
            url+=`/search/?text=${query}`;
        }
        else if (url == "https://mail.ru")
        {
            url+=  `/search?text=${query}`;
        }
        else if (url == "https://duckduckgo.com")
        {
            url+=  `/?q=${query}`;
        }
        else
        {
            url+=`/search?q=${query}`;
        }
    }
    console.log(url);
    res.redirect(url);
});

app.listen(3000, () => {
    console.log('Сервер запущен на порту 3000');
});