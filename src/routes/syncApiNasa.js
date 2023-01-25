const routerNasa = require('express').Router();
const getApi = require('../services/ApiNasa');

routerNasa.get('/', async (response) => {
    try {
        const result = await getApi()
        response.status(200).json(result)
    } catch (error) {
        response.status(500)
    }
});

routerNasa.get('/:id', async (response) => {
    try {
        const result = await getApi()
        response.status(200).json(result)
    } catch (error) {
        response.status(500)
    }
});

module.exports = routerNasa;