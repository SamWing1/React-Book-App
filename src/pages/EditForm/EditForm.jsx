import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SingleBook from '../SingleBook/SingleBook';
import * as booksApi from '../../utilities/books-api';

<div></div>
export default function AddBookPage({ id }) {

    const bookId = useParams().id

    console.log(bookId)

  const [books, setBooks] = useState([])

  const [error, setError] = useState('')

  const [form, setForm] = useState({})

//   async function handleAddBook(evt) {
//     evt.preventDefault();
//     try {
//       console.log(form)
//       await booksApi.addBook(form)
//       setForm({
//         name: '',
//         currentlyReading: 'Yes',
//         currentPage: 'NaN',
//         note: '',
//       })
//     } catch {
//       setError('Sign Up Failed - Try Again');
//     }
//   };

const addInfo = async () => {
    fetch(`http://localhost:3000/api/books/edit/${bookId}`, {method:"PUT"})
    .then(res => res.json())
    .then(data => setForm( data ))
    .catch(err => console.log(err))
    console.log('clicked')
    }

    console.log(id)

  useEffect(() => {
    addInfo()
    console.log("help?")
  }, []);


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <>
      <h1>Edit Book Info!</h1>

      <form className="Add-Book-Form">
        <label>Book Title:
          <input type="string" name="name" value={form.name} onChange={handleChange}></input>
        </label>
        <label>Currently Reading?
          <select name="currentlyReading" value={form.currentlyReading} onChange={handleChange}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>
        <label>Current Page:
          <input type="number" name="currentPage" value={form.currentPage} onChange={handleChange} placeholder="1"></input>
        </label>
        <label>Page Note?
          <input type="string" name="note" value={form.note} onChange={handleChange} placeholder="thoughts?"></input>
        </label>
        <input type="submit" value="Add Book"></input>
      </form>
    </>
  );
}
