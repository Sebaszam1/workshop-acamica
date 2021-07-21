const sequelize = require('./conexion');

async function findAll() {
    const inscripciones = await sequelize.query("Select * from inscripciones", { type: sequelize.QueryTypes.SELECT })
    console.log(inscripciones);

    return inscripciones;
}

async function createInscription(inscripcion) {

    const data = await sequelize.query("INSERT INTO inscripciones (idEvento, email) VALUES (?,?)",
        {
            type: sequelize.QueryTypes.INSERT,
            replacements: [inscripcion.id, inscripcion.email]
        })
    console.log(data);

    return data;

}

async function existeInscripcion(inscription) {
    const data = await sequelize.query("select 1 from inscripciones where idEvento= ? and email=?",
        {
            type: sequelize.QueryTypes.SELECT,
            replacements: [inscription.id, inscription.email]
        })
    console.log(data);

    /*if (data.lenght > 0) {
        return false;
    } else {
        return true;
    }*/
    //esto es lo mismo que la seccion de codigo anterior
    return !!data.length
}

module.exports = { findAll, createInscription, existeInscripcion };