// routes/api/users.js

const express = require('express');
const router = express.Router();
const booksCtrl = require('../../controllers/api/books');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/books
router.post('books/new', booksCtrl.create);

// GET /api/users/check-token
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);

module.exports = router;
