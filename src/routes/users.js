const routerUser = require('express').Router()
const { getUserById, toggleNasaToFavorite } = require('../controllers/controlerUser')

// Agregar favoritos a un usuario y controlar si existe dicho favorito en la DB
routerUser.post('/addToFavorites/:idNasa', async (request, response) => {
    try {
        const { idNasa } = request.params
        const { user, isAdded } = await toggleNasaToFavorite({
            id: request.user.id,
            idNasa
        })
        if (isAdded) {
            response.status(200).json('Favorites successfully added')
        } else {
            response.status(200).json('Favorite delete Ok')
        }
    } catch (error) {
        if (error.message === 'No exist this data in DB') {
            response.status(400).json(error.message)
        } else {
            response.status(500).json('No exist this data in DB')
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