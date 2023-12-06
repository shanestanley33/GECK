const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

//GET

router.get('/check-token',ensureLoggedIn, usersCtrl.checkToken);

//PUT


//POST

router.post('/login', usersCtrl.login)

// DELETE

module.exports = router;