const express = require('express');
const router = express.Router();
const path = require('path');

const views = path.join(__dirname, '/../views');

const loginAuth = require('../middlewares/registerAuth.js');

router.get('/', loginAuth, (req, res) => {
	res.sendFile(path.join(views, 'index.html'));
});

router.get('/register', (req, res) => {
	res.sendFile(path.join(views, 'register.html'));
});

module.exports = router;
