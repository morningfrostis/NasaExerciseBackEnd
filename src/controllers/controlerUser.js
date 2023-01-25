const User = require('../models/schemaUser')

const getUsersList = async () => {
    const users = await User.find()
    return users
}

const getUserById = async (id) => {
    const user = await User.findById(id)
    delete user.password;
    return user
}

const getUserByEmail = async (email) => {
    const user = await User.findOne({ email })
    return user
}

const createUser = async ({ name, email, password }) => {
    const user = new User({ name, email, password })
    const test = await user.save()
    return test
}

const updateUser = async (id, data) => {
    const user = await getUserById(id)
    await user.updateOne(data)
    return getUserById(id)
}

const removeUser = async (id) => {
    await User.findByIdAndDelete(id)
    return true
}

const toggleNasaToFavorite = async ({ id, idNasa }) => {
    const user = await getUserById(id)
    const currentFavList = user.nasaFavs
    let newFavsList = currentFavList

    const existed = currentFavList.includes(idNasa)

    if (existed) {
        newFavsList = currentFavList.filter(item => item !== idNasa)
    } else {
        const fav = await User.findById(idNasa)
        if (fav) {
            newFavsList.push(idNasa)
        }
        else {
            throw new Error('No exist this data in DB')
        }
    }
    //else {
    //const fav = await User.findById(idNasa)
    // if (fav) {
    //     newFavsList.push(idNasa)
    // } else {
    //     throw new Error('No exists data')
    // }
    //}

    await User.findByIdAndUpdate(id, { nasaFavs: newFavsList })

    let userUpdated = await getUserById(id)
    userUpdated = JSON.parse(JSON.stringify(userUpdated))

    const { password, salt, ...userUpdated_ } = userUpdated;
    return userUpdated_;

}

module.exports = {
    getUsersList,
    getUserById,
    createUser,
    updateUser,
    removeUser,
    getUserByEmail,
    toggleNasaToFavorite
}