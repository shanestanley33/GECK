import { checkToken } from "../../utilities/users-service";
import PlantDetail from '../../components/PlantDetail/PlantDetail.jsx'

export default function PlantPage({ plants }) {

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