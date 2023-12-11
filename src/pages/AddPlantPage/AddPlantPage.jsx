import { useState } from 'react';
import * as plantsAPI from '../../utilities/plants-api';
import './AddPlantPage.css';
import React from 'react';
export default function AddPlantPage() {
  
  const [newPlant, setNewPlant] = useState({
    name: '',
    species: '',
    variety: '',
    harvest_time_in_days: '',
    climate: '',
    description: '',
    soil_type: '',
    additional_notes: '',
    imageUrl: ''
  })

  const handleChange = (event) => {
    setNewPlant({ ...newPlant, [event.target.name] : event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const plant = await plantsAPI.createPlant(newPlant)
    console.log(plant)

  }
  return (
    <>
    <h2>Add Plant</h2>
    <form onSubmit={handleSubmit}>
      <input 
        name= 'name'
        value={newPlant.name}
        onChange={handleChange}
        placeholder='name'
        required
        pattern='.{3,}'
      />
      <input 
        name = 'species'
        value={newPlant.species}
        onChange={handleChange}
        placeholder='species'
        required
        pattern='.{3,}'
      />
      <input 
        name = 'variety'
        value={newPlant.variety}
        onChange={handleChange}
        placeholder='variety'
        required
        pattern='.{3,}'
      />
      <input 
        name = 'harvest_time_in_days'
        value={newPlant.harvest_time_in_days}
        onChange={handleChange}
        placeholder='harvest time'
        required
      />
      <input 
        name = 'climate'
        value={newPlant.climate}
        onChange={handleChange}
        placeholder='humidity/temp '
        required
        pattern='.{3,}'
      />
      <input 
        name = 'description'
        value={newPlant.description}
        onChange={handleChange}
        placeholder='description'
        required
        pattern='.{3,}'
      />
      <input 
        name = 'soil_type'
        value={newPlant.soil_type}
        onChange={handleChange}
        placeholder='nutrient levels'
        required
        pattern='.{3,}'
      />
      <input 
        name = 'additional_notes'
        value={newPlant.additional_notes}
        onChange={handleChange}
        placeholder='additional notes'
        pattern='.{3,}'
      />
      {/* choose file img to upload through aws*/}
      <button type="submit">Add Plant to List</button>
    </form>
    </>
  );
}