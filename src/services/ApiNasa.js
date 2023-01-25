const Data = require('../models/schemaNasa')

//Declaramos la función que llama a la api de la nasa y que usaremos en el GET general
async function getApi() {
    try {
        console.log('EJECUTANDO GET API')

        const response = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=' + process.env.APIKEY)
        const roversList = await response.json()

        const roverPhoto = roversList.photos

        const newList = roverPhoto.map(rover => (
            {
                idNasa: rover.id,
                camera: rover.camera,
                img_src: rover.img_src,
                earth_date: rover.earth_date
            }));

        //Probamos aquí el código para controlar documentos duplicados
        const itemsToCreate = [];
        const existedItems = await Data.find();
        for (const item of newList) {
            const existed = existedItems.find((existedItem) => existedItem.idNasa === item.idNasa)
            if (!existed) {
                itemsToCreate.push(item)
            }
        }
        if (itemsToCreate.length > 0) {
            Data.insertMany(itemsToCreate);
            Data.find();
            return 'DATOS SINCRONIZADOS Y GUARDADOS EN LA BASE DE DATOS';
        }

        return existedItems.concat(itemsToCreate);

    } catch (error) {
        console.log(error);
    }
}

//Exportamos la función para usarla en 'obtenerTodos' (nuestro GetAll) en controllerNasa.js
module.exports = getApi;