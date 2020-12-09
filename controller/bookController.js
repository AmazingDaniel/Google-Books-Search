const db = require("../models")

const bookController = {
    getBooks: function(req, res){
      db.Book.find().then(function(bookData){
        res.json(bookData)
      })
    },
    saveBooks: function(req, res){
        db.Book.create(req.body).then(function(bookData){
            res.json(bookData)
        })
    },
    deleteBook: function(req, res){
        db.Book.deleteOne({
            _id: req.params.id
        }).then(function(bookData){
            res.json(bookData)
        })
    }
}

module.exports = bookController