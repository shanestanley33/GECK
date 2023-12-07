import { useEffect, useState } from 'react';
import './PlantDetail.css';
import { useParams } from 'react-router-dom';
import { getPlantDetail } from '../../utilities/plants-api';
export default function PlantDetail(index) {
  const {id} = useParams()
  const [plant, setPlant] = useState([])

  useEffect(() => {
    const fetchDetail = async () => {
    try {
      const plantDetail = await getPlantDetail(id)
      setPlant(plantDetail)
    } catch (error) {
      console.error('Main Plant Page fetch error', error)
    }
  }
  fetchDetail()
}, [])
  return (
    <li>
    <div>
      
    </div>
    </li>
  );
}