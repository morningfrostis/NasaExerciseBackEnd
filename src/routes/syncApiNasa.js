const routerNasa = require('express').Router();
const getApi = require('../services/ApiNasa');

routerNasa.get('/', async (request, response) => {
    try {
        const result = await getApi() /* aqui está trayendo 'newlist' cargado de datos*/
        response.status(200).json(result)
    } catch (error) {
        response.status(500)
    }
});

module.exports = routerNasa;