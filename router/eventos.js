const express = require("express");
let router = express.Router();

let eventos = [
    {
        id:0,
        nombre:'Evento De Tecnologia'
    },
    {
        id:1,
        nombre:'Evento De Tecnologia 2'
    }
];

let respuesta = {
    error:false,
    codigo:200,
    mensaje:'listado de eventos'
}

router.get("/",(req,res)=>{
    respuesta = {
        error:false,
        codigo:200,
        mensaje:'listado de eventos',
        respuesta:eventos
    }
    res.status(200).send(respuesta);
});

module.exports = router;