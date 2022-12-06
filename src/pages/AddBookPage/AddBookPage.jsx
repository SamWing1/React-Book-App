import { useState } from 'react';
import * as booksApi from '../../utilities/books-api';
import './AddBookPage.css'

<div></div>
export default function AddBookPage({ book, setBook }) {

  const [error, setError] = useState('')

  const [form, setForm] = useState({
    name: '',
    currentlyReading: '',
    currentPage: 'NaN',
    pageNote: '',
  })

  async function handleAddBook(evt) {
    evt.preventDefault();
    try {
      console.log(form)
      // form.currentlyReading = (form.currentlyReading == 'Yes') ? true : false;
      await booksApi.addBook(form)
      setForm({
        name: '',
        currentlyReading: '',
        currentPage: 0,
        pageNote: '',
      })
    } catch {
      setError('Sign Up Failed - Try Again');
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <>
      <h1>Add Book</h1>
      <form onSubmit={handleAddBook} class="Add-Book-Form">
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
          <input type="string" name="pageNote" value={form.pageNote} onChange={handleChange} placeholder="thoughts?"></input>
        </label>
        <input type="submit" value="Add Book"></input>
      </form>
    </>
  );
}
