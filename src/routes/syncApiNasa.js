const routerNasa = require('express').Router();
const getApi = require('../services/ApiNasa');
const { getNasaById, createNasa, updateNasa, removeNasa } = require('../controllers/controlerNasa')

routerNasa.get('/', async (request, response) => {
    try {
        const result = await getApi()
        response.status(200).json(result)
    } catch (error) {
        response.status(500)
    }
});

routerNasa.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const result = await getNasaById(id);
        response.status(200).json(result);
    } catch (error) {
        response.status(500).json({ message: "Internal server error" });
    }
});

routerNasa.post('/', async (request, response) => {
    try {
        const result = await createNasa(request.body);
        response.status(201).json(result);
    } catch (error) {
        response.status(500).json({ message: "Internal server error" });
    }
});

routerNasa.put('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const result = await updateNasa(id, request.body);
        response.status(200).json(result);
    } catch (error) {
        response.status(500).json({ message: "Internal server error" });
    }
});

routerNasa.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const result = await removeNasa(id);
        response.status(200).json({ message: "Resource deleted" });
    } catch (error) {
        response.status(500).json({ message: "Internal server error" });
    }
});

module.exports = routerNasa;