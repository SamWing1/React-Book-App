const express = require('express');
const router = express.Router();
const booksCtrl = require('../../controllers/api/books');

// POST /api/books
router.post('/new', booksCtrl.bookCreate);
router.post('/delete', booksCtrl.bookDelete)
router.get('/show', booksCtrl.index);

module.exports = router;