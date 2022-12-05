// import book from "../../../models/book";
import { useState } from 'react';



export default function AddBookPage({addBook}) {

  
  const [form, setForm] = useState({
    name: '',
    reading: '',
    currentPage: 0,
    pageNote: '',
  })

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   .then(response =>  response.json)
  //   .then((json) => {setBooks({
  //     name: json.name,
  //     reading: json.reading,
  //     currentPage: json.currentPage,
  //     pageNote: json.pageNote,
  //   })})
  //   setForm(
  //     {
  //       name: '',
  //       reading: '',
  //       currentPage: 0,
  //       pageNote: '',
  //     }
  //   )
  //   console.log("is this thing on")
  // }

const handleAddBook = (event) => {
  event.preventDefault()
  addBook(form)
  setForm({
    name: '',
    reading: '',
    currentPage: 0,
    pageNote: '',
  })
}

const handleChange = (e) => {
  setForm({...form, [e.target.name]:e.target.value})
  console.log(form)
}

  return (
    <>
    <h1>Add Book</h1>
    <form onSubmit={handleAddBook}>
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