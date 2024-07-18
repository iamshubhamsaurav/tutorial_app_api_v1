const express = require('express')

const router = express.Router()

const {
    getAllBooks, getSingleBook,
    createBook,
    updateBook,
    deleteBook
} = require('../controllers/books')

router
    .route('/')
    .get(getAllBooks)
    .post(createBook)

router
    .route('/')
    .get(getSingleBook)
    .patch(updateBook)
    .delete(deleteBook)

module.exports = router