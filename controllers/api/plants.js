const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const User = require('../../models/plants');

module.exports = {
  plantIndex, //read
  createPlant,
  updatePlant,
  deletePlant
};

async function createPlant(req, res) {
  const plant = new Plant(req.body);
  // Assign the logged in user's id
  plant.userUsing = req.user._id;
  try {
    await plant.save();
    res.json(plant)
  } catch (error) {
    console.log("Error Creating New Plant", error);
    res.json() }
}

async function plantIndex(req, res) {
  let plantQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
  const plants = await Plant.find(plantQuery);
  res.render('plants/index', {
    plants,
    nameSearch: req.query.name
  });
}

async function updatePlant(req, res) {
  try {
    const updatedPlant = await Plant.findOneAndUpdate(
      {_id: req.params.id, userUsing: req.user._id},
      // update object with updated properties
      req.body,
      // options object {new: true} returns updated doc
      {new: true}
    );
    return res.redirect(`/plants/${updatedPlant._id}`);
  } catch (e) {
    console.log(e.message);
    return res.redirect('/plants');
  }
}

async function deletePlant(req, res) {
  await Plant.findOneAndDelete(
    {_id: req.params.id, userUsing: req.user._id}
  );
  res.redirect('/plants');
}