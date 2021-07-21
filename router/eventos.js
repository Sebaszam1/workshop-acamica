const express = require("express");
const validateEmail = require("../middlewares/validateEmail");
const { findAll, createEvent } = require("../models/eventos");
const { createInscription, existeInscripcion } = require("../models/inscripciones");
let router = express.Router();

let eventosArray = [
    {
        id: 0,
        nombre: 'Evento De Tecnologia'
    },
    {
        id: 1,
        nombre: 'Evento De Tecnologia 2'
    }
];

let inscripcionesArray = [
    {
        id: 0,
        email: 'patricia@acamica.com'
    },
    {
        id: 1,
        email: 'sebastian@acamica.com'
    }
];

let respuesta = {
    error: false,
    codigo: 200,
    mensaje: 'listado de eventos'
}

router.get("/", async (req, res) => {
    const eventos = await findAll();

    respuesta = {
        error: false,
        codigo: 200,
        mensaje: 'listado de eventos',
        respuesta: eventos
    }
    res.status(200).send(respuesta);
});

//endpoint para crear eventos
router.post('/', async (req, res) => {
    if (typeof req.body.nombre == "string") {
        const data = await createEvent(req.body);
        respuesta = {
            error: false,
            codigo: 200,
            mensaje: 'Evento creado'
        }

    } else {
        respuesta = {
            error: true,
            codigo: 401,
            mensaje: 'Evento erroneo'
        }
    }

    res.status(respuesta.codigo).send(respuesta);
});

//endpoint para crear inscripciones a eventos
router.post('/Inscripcion', validateEmail, async (req, res) => {
    const { email, id } = req.body;



    //const validacion = inscripciones.find(inscripcion => inscripcion.email == email && inscripcion.id == id);

    const estaRegistrado = await existeInscripcion(req.body);

    console.log("validacion", estaRegistrado);
    if (estaRegistrado == true) {
        respuesta = {
            error: true,
            codigo: 401,
            mensaje: `Ya se encuentra registrado en el evento ${id}`
        }
    }
    else {

        const inscripcion = await createInscription(req.body)

        console.log(inscripcion);
        respuesta = {
            error: false,
            codigo: 200,
            mensaje: `Usuario inscripto correctamente al evento ${id}`
        }
    }



    res.status(respuesta.codigo).send(respuesta);

});

module.exports = router;