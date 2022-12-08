import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as booksApi from '../../utilities/books-api';
import './AddBookPage.css'

<div></div>
export default function AddBookPage({ book, setBook }) {

  const navigate = useNavigate()

  const [error, setError] = useState('')

  const [form, setForm] = useState({
    name: '',
    currentlyReading: 'Yes',
    currentPage: '1',
    note: '',
  })

  async function handleAddBook(evt) {
    evt.preventDefault();
    try {
      navigate('/books')
      await booksApi.addBook(form)
      setForm({
        name: '',
        currentlyReading: 'Yes',
        currentPage: '1',
        note: '',
      })
    } catch {
      setError('whoops');
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <>
      <h1>Add Book</h1>
      <form onSubmit={handleAddBook} className="Add-Book-Form">
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
