import databaseConnection from '../utils/database'
import User from '../models/user'

const listUsers = async() => {
    await databaseConnection()
    const users = await User.find()
    return users
}

const createUsers = async(user) => {
    await databaseConnection()
    const createUsers = await User.create(user)
    return createUsers
}

const deleteUsers = async(id) => {
    await databaseConnection()
    await User.findByIdAndDelete(id)
}

const updateUsers = async(id, newBody) => {
    await databaseConnection()
    await User.findByIdAndUpdate(id, newBody)
}

export {
    listUsers,
    createUsers,
    deleteUsers,
    updateUsers
}