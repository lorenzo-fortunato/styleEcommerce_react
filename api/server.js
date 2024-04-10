const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require('body-parser')   // necessario installarlo, senza non viene fatto il parse del body, che risulta poi undefined

const app = express();

const credentials = {
    username: 'pippo',
    password: 'franco',
};

const jsonParser = bodyParser.json();     // necessario per il parse del body

app.post('/login', jsonParser, (req, res) => {
    console.log(req.body.username);

    const user = req.body.username;
    const password = req.body.password;

    if (!user || !password ) {
        return res.status(400).send('Insert valid user and password');
    }

    if (user != credentials.username || password != credentials.password) {
        return res.status(400).send('Wrong username and password');
    } else {
        const token = jwt.sign({ user }, 'secret', { expiresIn: '1h'});
        return res.status(200).send({ token });
    }
});

app.listen(8080, () => { console.log('Server in ascolto sulla porta 8080'); });