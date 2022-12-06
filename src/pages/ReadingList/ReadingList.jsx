import { useState, useEffect } from 'react';
import { checkToken } from '../../utilities/users-service';
import { Link } from 'react-router-dom';
import './readingList.css';


export default function ReadingList({book}) {
  
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

  // window.onload = showData()

  useEffect(() => {
    showData()
  }, []);

  const deleteButton = async () => {
    const response = await fetch('http://localhost:3000/api/books/show/')
    .then(res => res.json())
    .then(data => setBooks(data))
    .catch(err => console.log(err))
    console.log('clicked')
    }
  

  return (
    <>
      <h1>Reading List</h1>

      <table class="reading-list table table-striped">
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
              <td>{info._id}</td>
              <td><Link to='/BookDetails'>Note</Link></td>
              <td><button onClick={deleteButton}>X</button></td>
            </tr>
          )
        })}
  </table>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </>
  );
}