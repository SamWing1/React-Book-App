import { checkToken } from '../../utilities/users-service';

export default function ReadingList() {
  
  async function handleCheckToken() {
    const expDate = await checkToken();
    console.log(expDate.toLocaleDateString())
  }

  return (
    <>
      <h1>Reading List</h1>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </>
  );
}