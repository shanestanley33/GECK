const Plant = require('../../models/plants')

module.exports = {
  mainPlantPage, //read
  createPlant,
  updatePlant,
  deletePlant,
  plantShow
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

async function mainPlantPage(req, res) {
  try {
    const plants = await Plant.find({});
    res.status(200).json(plants);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function plantShow(req, res) {
  try {
    const plantDetails = await Plant.find({})
    res.status(200).json(plantDetails)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
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