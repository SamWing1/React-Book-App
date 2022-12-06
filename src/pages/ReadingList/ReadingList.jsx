import { checkToken } from '../../utilities/users-service';
import { Link } from 'react-router-dom';
import './readingList.css';


export default function ReadingList( {book} ) {
  
  async function handleCheckToken() {
    const expDate = await checkToken();
    console.log(expDate.toLocaleDateString())
  }

  function showData() {
    fetch('https://localhost:3001/api/books/show')
    .then(res => res.json())
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }

  return (
    <>
      <h1>Reading List</h1>

    <button onClick={showData}>Press me</button>

      <table class="reading-list">
        <tr>
          <th>Title</th>
          <th>Currently Reading?</th>
          <th>Current Page</th>
          <th>Page Note</th>
          <th>Delete</th>
        </tr>
        {book.map((info, key) => {
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