const Plant = require('../../models/plants')

module.exports = {
  mainPlantPage, //read
  createPlant,
  updatePlant,
  editPlant,
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
      const userId = req.user._id;
      const userPlants = await Plant.find({ userId });
      res.status(200).json(userPlants);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

async function plantShow(req, res) {
  try {
    const plantDetails = await Plant.findById(req.params.id)
    res.status(200).json(plantDetails)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

async function editPlant(req, res) {
  const plant = await Plant.findById(req.params.id)
  res.render('plants/edit', {
    title: 'Edit Plants',
    plant
  })
}

async function updatePlant(req, res) {
  try {
    const updatedPlant = await Plant.findOneAndUpdate(
      {_id: req.params.id},
      // update object with updated properties
      req.body,
      // options object {new: true} returns updated doc
      {new: true}
    );
    return res.json(updatedPlant);
  } catch (error) {
    console.log(error.message);
  }
}

async function deletePlant(req, res) {
  const id = req.params.id
  const deletedPlant = await Plant.findByIdAndDelete(
    req.params.id
  );
  res.json(deletedPlant);
}