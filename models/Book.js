const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide book title"]
    },
    description: {
        type: String,
        required: [true, "Please provide book description"]
    }
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book;