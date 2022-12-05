import { checkToken } from '../../utilities/users-service';
import { Link } from 'react-router-dom';


export default function ReadingList( {books} ) {
  
  async function handleCheckToken() {
    const expDate = await checkToken();
    console.log(expDate.toLocaleDateString())
  }

  return (
    <>
      <h1>Reading List</h1>

      <table>
        <tr>
          <th>Title</th>
          <th>Currently Reading?</th>
          <th>Current Page</th>
          <th>Page Note</th>
          <th>Delete</th>
        </tr>
        {books.map((info, key) => {
          return (
            <tr key={key}>
              <td>{info.name}</td>
              <td>{info.currentlyReading}</td>
              <td>{info.currentPage}</td>
              <td><Link to='/BookDetails'>Note</Link></td>
              <td><button type="submit">X</button></td>
            </tr>
          )
        })}
  </table>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </>
  );
}