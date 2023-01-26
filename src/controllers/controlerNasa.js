const Data = require('../models/schemaNasa');

const getNasaList = async () => {
    const result = await Data.find(request.body);
    return result
}

const getNasaById = async (id) => {
    //const result = await Data.find(request.body);
    const result = await Data.findById(id);
    return result
}

const createNasa = async ({ idNasa, camera, img_src, earth_date }) => {
    const result = new Data({ idNasa, camera, img_src, earth_date })
    return result.save()
}

const updateNasa = async (id, data) => {
    const result = await getNasaById(id);
    await result.updateOne(data)
    return getNasaById(id)
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