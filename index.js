const express = require('express')
require('dotenv').config()

// Internal Middlewares
const connectDB = require('./config/db')

connectDB()

const app = express()

const bookRoutes = require('./routes/books')

app.use('/api/v1/books', bookRoutes)

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log("Listening to server on PORT: " + PORT)
})