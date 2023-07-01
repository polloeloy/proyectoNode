const express = require('express');
const router = express.Router();
const userExtractor = require('../middleware/userExtractor');


const booksController = require('../controllers/booksController');

module.exports = function(){

    //ruta para el home
    router.get('/',(req,res) => {
        res.send('<h1>Hola Mundo</h1>');
    });

    

    // Ruta para crear libro
    router.post('/book', userExtractor, booksController.createBook);
    // Ruta para actualizar el libro
    router.put('/book/:id', userExtractor, booksController.updateBook);
    // Ruta para eliminado logico de un libro
    router.delete('/book/:id', userExtractor, booksController.deleteBook);
    

    // Ruta para obtener todos los libros
    router.get('/book', booksController.getAllBooks);
    // Ruta para obtener un libro en particular
    router.get('/book/:id', booksController.getBook);

    return router;
}