// import book from "../../../models/book";
import { useState } from 'react';
import addBook from '../../utilities/books-api';
import './AddBookPage.css'


export default function AddBookPage({book, setBook}) {

  const [error, setError] = useState('')

  const [form, setForm] = useState({
    name: '',
    reading: '',
    currentPage: 0,
    pageNote: '',
  })

// const handleAddBook = async(event) => {
//   event.preventDefault()
//   addBook(form)
//   setForm({
//     name: '',
//     reading: '',
//     currentPage: 0,
//     pageNote: '',
//   })
// }

async function handleAddBook (evt) {
  evt.preventDefault();
  try {
    console.log(form)
    await addBook(form)
  setForm({
    name: '',
    reading: '',
    currentPage: 0,
    pageNote: '',
  })
  } catch {
    setError( 'Sign Up Failed - Try Again' );
  }
};

const handleChange = (e) => {
  setForm({...form, [e.target.name]:e.target.value})
  console.log(form)
}

  return (
    <>
    <h1>Add Book</h1>
    <form onSubmit={handleAddBook} class="Add-Book-Form">
    <label>Book Title:
      <input type="string" name="name" value={form.name} onChange={handleChange}></input>
    </label>
    <label>Currently Reading?
      <select name="reading" value={form.reading} onChange={handleChange}>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
      </label>
      <label>Current Page:
        <input type="number" name="currentPage" value={form.currentPage} onChange={handleChange}></input>
    </label>
      <label>Page Note?
        <input type="string" name="pageNote" value={form.pageNote} onChange={handleChange}></input>
      </label>
    <input type="submit" value="Add Book"></input>
    </form>
    </>
  );
}
