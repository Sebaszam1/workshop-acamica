const Sequelize = require('sequelize');

const path = 'mysql://root:admin@localhost:3306/eventos';
const sequelize = new Sequelize(path, { operatorAliases: false });

sequelize.authenticate().then(() => {
    console.log('conectado');
}).catch(err => {
    console.log('Error de conexion: ', err);
});

module.exports = sequelize;