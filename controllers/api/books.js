const Book = require('../../models/book')

module.exports = {
    bookCreate,
};

async function bookCreate(req, res) {
    console.log("seriously dog")
    try {
        console.log(req.body, "here")
        const book = await Book.create(req.body);
        res.json(book)
    } catch (err) {
      res.status(400).json(err);
    }
  }