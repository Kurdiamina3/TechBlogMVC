require('dotenv').config();
const { Sequelize } = require('sequelize');
const app =  require('./app');
const initDb = ('./utils/checkDbConnection');

checkDbConnection();

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`App running on ${port}...`);
});