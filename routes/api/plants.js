const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/plants');
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const user = require('../../models/user');

//GET
router.get('/:id', ensureLoggedIn, usersCtrl.plantShow)
router.get('/', ensureLoggedIn, usersCtrl.mainPlantPage);

//PUT

router.put('/:id', ensureLoggedIn, usersCtrl.updatePlant);

//POST

router.post('/', ensureLoggedIn, usersCtrl.createPlant);

// DELETE

router.delete('/:id', ensureLoggedIn, usersCtrl.deletePlant);

module.exports = router;