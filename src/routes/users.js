const routerUser = require('express').Router()
const { getUserById, getUsersList, createUser, removeUser, updateUser, toggleNasaToFavorite } = require('../controllers/controlerUser')

// routerUser.get('/', async (request, response) => {
//     try {
//         const users = await getUsersList()
//         response.status(200).json(users)
//     } catch (error) {
//         response.status(500)
//     }
// })

routerUser.get('/:id',  async (request, response) => {
    try {
        const { id } = request.params
        const user = await getUserById(id)
        response.status(200).json(user)
    } catch (error) {
        response.status(500)
    }
})

routerUser.post('/', async (request, response) => {
    try {
        const data = request.body
        const user = await createUser(data)
        response.status(200).json(user)
    } catch (error) {
        response.status(500).json(error)
    }
})

routerUser.post('/toggle/datas/:idNasa', async (request, response) => {
    try {
        const {idNasa} = request.params
        const user = await toggleNasaToFavorite({
            id: request.user.id,
            idNasa
        })
        response.status(200).json(user)
    } catch (error) {
        response.status(500).json('Favorite creation failed')
    }
})

// Obtener favoritos por cada usuario
routerUser.get('/favorites/:idNasa', async (request, response) => {
    try {
        const {idNasa} = request.params
        const user = await getUserById(idNasa)
        const favorites_ = user.nasaFavs
        response.status(200).json(favorites_)
    } catch (error) {
        response.status(500).json('Cant show favorites')
    }
})

routerUser.put('/:id', async (request, response) => {
    try {
        const { id } = request.params
        const data = request.body
        const user = await updateUser(id, data)
        response.status(200).json(user)
    } catch (error) {
        response.status(500)
    }
})

routerUser.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params
        await removeUser(id)
        response.status(200).json(true)
    } catch (error) {
        response.status(500)
    }
})

module.exports = routerUser