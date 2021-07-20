const express = require("express");
let router = express.Router();

let eventos = [
    {
        id: 0,
        nombre: 'Evento De Tecnologia'
    },
    {
        id: 1,
        nombre: 'Evento De Tecnologia 2'
    }
];

let inscripciones = [
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

router.get("/", (req, res) => {
    respuesta = {
        error: false,
        codigo: 200,
        mensaje: 'listado de eventos',
        respuesta: eventos
    }
    res.status(200).send(respuesta);
});

router.post('/', (req, res) => {
    const { email, id } = req.body;

    if (email.indexOf('gmail') !== -1 || email.indexOf('hotmail') !== -1 || email.indexOf('yahoo') !== -1) {
        respuesta = {
            error: true,
            codigo: 401,
            mensaje: 'Email incorrecto'
        }
    } else {

        const validacion = inscripciones.find(inscripcion => inscripcion.email == email && inscripcion.id == id);

        console.log(inscripciones);
        console.log("validacion", validacion);
        if (validacion != undefined) {
            respuesta = {
                error: true,
                codigo: 401,
                mensaje: `Ya se encuentra registrado en el evento ${id}`
            }
        }
        else {
            inscripciones.push(req.body);

            console.log(inscripciones);
            respuesta = {
                error: false,
                codigo: 200,
                mensaje: `Usuario inscrito correctamente al evento ${id}`
            }
        }

    }

    res.status(respuesta.codigo).send(respuesta);

});

module.exports = router;