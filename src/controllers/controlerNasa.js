const Data = require('../models/schemaNasa');

const getNasaList = async () => {
    const result = await Data.find(request.body);
    return result
}

const getNasaById = async (idNasa) => {
    //const result = await Data.find(request.body);
    const result = await Data.findOne(idNasa);
    return result
}

const createNasa = async ({ idNasa, camera, img_src, earth_date }) => {
    const result = new Data({ idNasa, camera, img_src, earth_date })
    return result.save()
}

const updateNasa = async (id, data) => {
    const result = await Data.findByIdAndUpdate(id, data, { new: true });
    if (!result) {
        throw new Error("No se encuentra el documento a actualizar")
    }
    return result
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