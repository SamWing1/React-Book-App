const Book = require('../../models/book')

module.exports = {
    bookCreate,
    index,
    bookDelete
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
        console.log(req.body, "delete?")
        const book = await Book.deleteOne(req.params._id);
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
