const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const Plant = require('../../models/plants')
module.exports = {
  MainPlantPage, //read
  createPlant,
  updatePlant,
  deletePlant
};

async function createPlant(req, res) {
  const plant = new Plant(req.body);
  console.log(plant)
  // Assign the logged in user's id
  plant.userUsing = req.user._id;
  try {
    await plant.save();
    res.json(plant)
  } catch (error) {
    console.log("Error Creating New Plant", error);
    res.json() }
}

async function MainPlantPage(req, res) {
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
  const id = req.params.id
  await Plant.findByIdAndDelete(
    {_id: req.params.id, userUsing: req.user._id}
  );
  res.redirect('/plants');
}