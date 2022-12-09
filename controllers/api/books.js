const Book = require('../../models/book')

module.exports = {
    bookCreate,
    index,
    bookDelete,
    bookEdit,
    bookUpdate
};

async function bookCreate(req, res) {
    try {
        const book = await Book.create(req.body);
        res.json(book)
    } catch (err) {
      res.status(400).json(err);
    }
  }

  async function bookDelete(req, res) {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        res.json(book)
    } catch (err) {
      res.status(400).json(err);
    }
  }

  async function index(req, res) {
    const dbBook = await Book.find()
    res.json(dbBook)
  }

  async function bookEdit(req, res) {
    try {
      const book = await Book.findById(req.params.id);
      res.json(book)
    } catch (err) {
      res.status(400).json(err);
    }
  }

  async function bookUpdate(req, res) {
    Book.findById(req.params.id)
    .then (function(book){
      book.name=req.body.name
      book.currentlyReading=req.body.currentlyReading
      book.currentPage=req.body.currentPage
      book.note=req.body.note
      book.save()
    }) .then (function(book){
      res.json(book)
    })
    .catch (function(err){
      res.status(400).json(err)
    })
  }