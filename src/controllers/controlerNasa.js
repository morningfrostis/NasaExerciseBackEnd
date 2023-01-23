const Data = require('../models/schemaNasa');

const getNasaList = async () => {
    const result = await Data.find(request.body);
    return result
}

const getNasaById = async () => {
    const result = await Data.find(request.body);
    return result
}

const createNasa = async ({ idNasa }) => {
    const result = new Data({ idNasa })
    return result.save()
}

const updateNasa = async (id, data) => {
    const result = await getNasaById(id);
    await result.updateOne(data)
}

const removeNasa = async (id) => {
    await Data.findByIdAndDelete(id)
    return true
}

module.exports = {
    getNasaList,
    getNasaById,
    createNasa,
    updateNasa,
    removeNasa
}