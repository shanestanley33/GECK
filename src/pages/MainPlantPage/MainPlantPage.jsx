import React, {useEffect, useState} from 'react';
import { getAllPlants } from '../../utilities/plants-api';
import { Link } from 'react-router-dom';
// import PlantDetail from '../../components/PlantDetail/PlantDetail.jsx'

export default function MainPlantPage() {
  const [plants, setPlants] = useState([])

  useEffect(() => {
    const fetchInfo = async () => {
    try {
      const plantInfo = await getAllPlants()
      setPlants(plantInfo)
    } catch (error) {
      console.error('Main Plant Page fetch error', error)
    }
  }
  fetchInfo()
}, [])

  return (
      <div>
        <ul>
          {plants.map((plant) => (
            <li key={plant._id}>
              <Link to={`/plants/${plant._id}`}>
                <div>
                  <p>{plant.name}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
  );
}