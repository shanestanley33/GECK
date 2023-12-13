import React, { useEffect, useState } from 'react';
import { getAllPlants, deletePlant } from '../../utilities/plants-api';
import { useNavigate } from 'react-router-dom';

export default function MainPlantPage({ setPlant }) {
  const [plants, setPlants] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const plantInfo = await getAllPlants();
        console.log(plantInfo);
        setPlants(plantInfo);
      } catch (error) {
        console.error('Main Plant Page fetch error', error);
      }
    };
    fetchInfo();
  }, []);

  async function handleDelete(id) {
    const deletedplant = await deletePlant(id);
    console.log(deletedplant);
    const updatedPlants = plants.filter((plant) => plant._id !== deletedplant._id);
    setPlants(updatedPlants);
  }

  function handleClick(plant) {
    setPlant(plant);
    navigate(`/plants/${plant._id}`);
  }

  return (
    <div>
      <ul>
        {plants.map((plant) => (
          <li key={plant._id}>
            <div onClick={() => handleClick(plant)}>
              <p>{plant.name}</p>
            </div>
            <div>
              <button onClick={() => handleDelete(plant._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}