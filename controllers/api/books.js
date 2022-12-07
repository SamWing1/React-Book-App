const Book = require('../../models/book')

module.exports = {
    bookCreate,
    index,
    bookDelete,
    bookEdit,
};

async function bookCreate(req, res) {
    console.log("seriously dog")
    try {
        console.log(req.body, "here")
        const book = await Book.create(req.body);
        res.json(book)
    } catch (err) {
      console.log(err)
      res.status(400).json(err);
    }
  }

  async function bookDelete(req, res) {
    try {
        console.log(req.params.id, "delete?")
        const book = await Book.findByIdAndDelete(req.params.id);
        console.log(book._id)
        res.json(book)
    } catch (err) {
      console.log(err)
      res.status(400).json(err);
    }
  }

  async function index(req, res) {
    const dbBook = await Book.find()
    console.log(dbBook)
    res.json(dbBook)
  }

  async function bookEdit(req, res) {
    try {
      console.log(req.params.id, "edit?")
      const book = await Book.findById(req.params.id);
      res.json(book)
    } catch (err) {
      console.log(err)
      res.status(400).json(err);
    }
  }