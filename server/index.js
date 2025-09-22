const express = require('express');
const app = express();
const port = 3000;
const mangas = [];//manga array

app.use(express.json());

app.get('/mangas', (req, res) => {
    res.json(tasks);
});

app.get(`/${mangas}`, (req, res) => {
    res.json(tasks);
});

app.get(`/${mangas}/${chapter}/${page}`, (req, res) => {
    res.json(tasks);
});

app.listen(port, () => {
    console.log(`App rodando em http://localhost:${port}`);
});