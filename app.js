const cors = require('cors');
app.use(cors());

const express = require('express');
const app = express();
const data = require('./data.js');

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/scientists', (req, res) => {
    res.json(data);
})

app.get('/scientists/:id', (req, res) => {
    const scientistId = Number(req.params.id);
    const scientist = data.find((item) => item.id === scientistId)
    res.json(scientist);
})

module.exports = app;