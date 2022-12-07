import { useState, useEffect } from 'react';
import { checkToken } from '../../utilities/users-service';
import { Link } from 'react-router-dom';
import * as booksApi from '../../utilities/books-api';
import SingleBook from '../SingleBook/SingleBook';
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

  console.log(books.filter(item => {
    return item._id
  }))

  
    // useEffect(() => {
    //   showData()
    //   console.log("help")
    // }, [books]);

  return (
    <>
      <h1>Reading List</h1>

      <table className="reading-list table table-striped">
        <tr>
          <th>Title</th>
          <th>Currently Reading?</th>
          <th>Current Page</th>
          <th>Page Note</th>
          <th>Delete</th>
        </tr>
          
        {books.map((info) => <SingleBook key={info.name} name={info.name} currentlyReading={info.currentlyReading} currentPage={info.currentPage} _id={info._id} />)}
          
  </table>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </>
  );
}