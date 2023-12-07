import { checkToken } from "../../utilities/users-service.js";
import PlantDetail from '../../components/PlantDetail/PlantDetail.jsx'
import { useState } from "react";

export default function MainPlantPage() {
  const [plants, setPlants] = useState([])
  const plantEntry = plants.map((plant, idx) => <PlantDetail plant={plant} index={idx} key={idx}/>)

  
  // async function handleCheckToken() {
  //   const expDate = await checkToken()
  //   console.log(expDate)
  // }

  return (
      <ul>
        {plantEntry}
      </ul>
  );
}