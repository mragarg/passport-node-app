require('dotenv').config();

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
        <h1> Hello </h1>
    `)
});

app.listen(process.env.PORT, () => {
    console.log(`You are running on port ${process.env.PORT}`);
});