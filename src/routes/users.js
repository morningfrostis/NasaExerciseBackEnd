const routerUser = require('express').Router()
const { getUserById, toggleNasaToFavorite } = require('../controllers/controlerUser')

// Agregar favoritos a un usuario y controlar si existe dicho favorito en la DB
routerUser.post('/addToFavorites/:idNasa', async (request, response) => {
    try {
        const { idNasa } = request.params
        const user = await toggleNasaToFavorite({
            id: request.user.id,
            idNasa
        })
        response.status(200).json(user)
    } catch (error) {
        if (error.message === 'No exist this data in DB') {
            response.status(400).json(error.message)
        } else {
            response.status(500).json('Favorite creation failed')
        }
    }
})

// Obtener favoritos por cada usuario
routerUser.get('/favorites/:idNasa', async (request, response) => {
    try {
        const { idNasa } = request.params
        const user = await getUserById(idNasa)
        const favorites_ = user.nasaFavs
        response.status(200).json(favorites_)
    } catch (error) {
        response.status(500).json('Cant show favorites')
    }
})

module.exports = routerUser