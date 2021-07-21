const sequelize = require('./conexion');

async function findAll() {
    const eventos = await sequelize.query("Select * from eventos", { type: sequelize.QueryTypes.SELECT })
    console.log(eventos);

    return eventos;
}

async function findEvent(id) {
    const eventos = await sequelize.query("Select * from eventos where id=?",
        {
            type: sequelize.QueryTypes.SELECT,
            replacements: [id]
        })


    console.log(eventos);
    return eventos;
}

async function createEvent(event) {
    const data = await sequelize.query("insert into eventos (nombre) values (?)",
        {
            type: sequelize.QueryTypes.INSERT,
            replacements: [event.nombre]
        })


    console.log(data);
    return data;
}

module.exports = { findAll, findEvent, createEvent }