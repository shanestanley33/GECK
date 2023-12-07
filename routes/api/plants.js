const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/plants');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

//GET

router.get('/', usersCtrl.MainPlantPage);

//PUT

router.put('/:id', ensureLoggedIn, usersCtrl.updatePlant)

//POST

router.post('/', ensureLoggedIn, usersCtrl.createPlant);

// DELETE

router.delete('/:id', ensureLoggedIn, usersCtrl.deletePlant)
module.exports = router;