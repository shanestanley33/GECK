import React, {useEffect, useState} from 'react';
import { getAllPlants, deletePlant } from '../../utilities/plants-api';
import { useNavigate } from 'react-router-dom';
// import PlantDetail from '../../components/PlantDetail/PlantDetail.jsx'

export default function MainPlantPage({setPlant}) {

  const [plants, setPlants] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInfo = async () => {
    try {
      const plantInfo = await getAllPlants()
      console.log(plantInfo)
      setPlants(plantInfo)
    } catch (error) {
      console.error('Main Plant Page fetch error', error)
    }
  }
  fetchInfo()
}, [])

  async function handleDelete(id) {
      const deletedplant = await deletePlant(id)
      console.log(deletedplant)
      const updatedPlants = plants.filter(plant => plant._id !== deletedplant._id)
      setPlants(updatedPlants)
    }
  
  function handleClick(plant) {
    setPlant(plant)
    navigate(`/plants/${plant._id}`)
  }
  return (
      <div>
        <ul>
          {plants.map((plant) => (
            <li onClick={ () => handleClick(plant)} key={plant._id}>
                <div>
                  <p>{plant.name}</p>
                </div>
              <button onClick={ () => {handleDelete(plant._id)}}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
  );
}