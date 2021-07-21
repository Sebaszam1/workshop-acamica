function validateEmail(req, res, next) {
    const { email } = req.body;

    if (email.indexOf('gmail') !== -1 || email.indexOf('hotmail') !== -1 || email.indexOf('yahoo') !== -1) {
        respuesta = {
            error: true,
            codigo: 401,
            mensaje: 'Email incorrecto'
        }

        res.status(respuesta.codigo).send(respuesta);
    } else {
        next();
    }
}

module.exports = validateEmail;