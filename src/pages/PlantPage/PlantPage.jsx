import { checkToken } from "../../utilities/users-service";

export default function PlantPage() {

  async function handleCheckToken() {
    const expDate = await checkToken()
    console.log(expDate)
  }

  return (
    <>
      <h1>PlantPage</h1>
    </>
  );
}