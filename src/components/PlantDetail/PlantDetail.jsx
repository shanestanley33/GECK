import { useEffect, useState } from 'react';
import React from 'react';
import './PlantDetail.css';
import { useParams } from 'react-router-dom';
import { getPlantDetail, updatePlant } from '../../utilities/plants-api';
export default function PlantDetail(props) {
  const {id} = useParams()
  const [plant, setPlant] = useState({})
  const [updatedPlantInfo, setupdatedPlantInfo] = useState({
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

  const fetchDetail = async () => {
  try {
    const plantDetail = await getPlantDetail(id)
    console.log(plantDetail)
    setPlant(plantDetail)
  } catch (error) {
    console.error('Main Plant Page fetch error', error)
  }
}
  useEffect(() => {
  fetchDetail()
}, [])


  const handleChange = (event) => {
    setupdatedPlantInfo({ ...updatedPlantInfo, [event.target.name] : event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await updatePlant(updatedPlantInfo, id)
    fetchDetail()
  }

  return (
    <>
    
    <li>name:  {plant.name}</li>,
    <li>species:  {plant.species}</li>,
    <li>variety:  {plant.variety}</li>,
    <li>harvest time in days:  {plant.harvest_time_in_days}</li>,
    <li>climate:  {plant.climate}</li>,
    <li>description:  {plant.description}</li>,
    <li> soil type:  {plant.soil_type}</li>,
    <li>additional notes:  {plant.additional_notes}</li>,

    <h2>Edit Plant Details</h2>
    <form onSubmit={handleSubmit}>
      <input 
        name= 'name'
        value={updatedPlantInfo.name}
        onChange={handleChange}
        placeholder='name'
        required
        pattern='.{3,}'
      />
      <input 
        name = 'species'
        value={updatedPlantInfo.species}
        onChange={handleChange}
        placeholder='species'
        required
        pattern='.{3,}'
      />
      <input 
        name = 'variety'
        value={updatedPlantInfo.variety}
        onChange={handleChange}
        placeholder='variety'
        required
        pattern='.{3,}'
      />
      <input 
        name = 'harvest time in days'
        value={updatedPlantInfo.harvest_time_in_days}
        onChange={handleChange}
        placeholder='harvest time in days'
        required
      />
      <input 
        name = 'climate'
        value={updatedPlantInfo.climate}
        onChange={handleChange}
        placeholder='humidity/temp '
        required
        pattern='.{3,}'
      />
      <input 
        name = 'description'
        value={updatedPlantInfo.description}
        onChange={handleChange}
        placeholder='description'
        required
        pattern='.{3,}'
      />
      <input 
        name = 'soil_type'
        value={updatedPlantInfo.soil_type}
        onChange={handleChange}
        placeholder='nutrient levels'
        required
        pattern='.{3,}'
      />
      <input 
        name = 'additional_notes'
        value={updatedPlantInfo.additional_notes}
        onChange={handleChange}
        placeholder='additional notes'
        pattern='.{3,}'
      />
      {/* choose file img to upload through aws*/}
      <button type="submit">update plant</button>
    </form>
    </>
  );
}