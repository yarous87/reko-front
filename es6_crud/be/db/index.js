import Sequelize from 'sequelize';

const db = new Sequelize('', '', '', {
    dialect: 'sqlite',
    storage: './db/crud.db'
});

db.authenticate()
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

export { db };