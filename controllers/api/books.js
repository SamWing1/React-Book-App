const Book = require('../../models/book')

module.exports = {
    create,
};

// function create(req, res) {
//     var book = new Book(req.body);
//     book.save(function(err) {
//         if (err) return res.redirect('/')
//         console.log(book);
//         res.redirect('/')
//     })
//     console.log("test")
// }

async function create(req, res) {
    try {
      const book = await Book.create(req.body);
      res.json(book)
    } catch (err) {
      res.status(400).json(err);
    }
  }