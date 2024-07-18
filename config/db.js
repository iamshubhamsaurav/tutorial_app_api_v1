const mongoose = require('mongoose')
const colors = require('colors')

const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URL)
    console.log('Database Connected'.green.inverse)
}

module.exports = connectDB