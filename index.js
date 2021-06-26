const express = require("express");
const bodyParser = require('body-parser');
const eventos= require("./router/eventos");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/eventos",eventos);

app.listen('3000', () => {
    console.log('Conectado');
});


