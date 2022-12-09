import { useState, useEffect } from 'react';
import { checkToken } from '../../utilities/users-service';
import SingleBook from '../SingleBook/SingleBook';
import './readingList.css';


export default function ReadingList() {
  
  const [books, setBooks] = useState([])

  async function handleCheckToken() {
    const expDate = await checkToken();
    console.log(expDate.toLocaleDateString())
  }

  function showData() {
    fetch('http://localhost:3000/api/books/show')
    .then(res => res.json())
    .then(data => setBooks( data ))
    .catch(err => console.log(err))
  }
  
    useEffect(() => {
      showData()
    }, []);

  return (
    <>
      <h1>Reading List</h1>

      <table className="reading-list table table-striped">
        <tbody>
        <tr>
          <th>Title</th>
          <th>Currently Reading?</th>
          <th>Current Page</th>
          <th>Page Note</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        </tbody>
        {books.map((info) => <SingleBook key={info.name} name={info.name} currentlyReading={info.currentlyReading} currentPage={info.currentPage} _id={info._id} note={info.note} showData={showData} />)}
          
  </table>
    </>
  );
}