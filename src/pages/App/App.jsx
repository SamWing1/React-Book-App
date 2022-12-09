import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import AddBookPage from '../AddBookPage/AddBookPage';
import ReadingList from '../ReadingList/ReadingList';
import EditForm from '../EditForm/EditForm';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());

  const [books, setBooks] = useState([]);

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
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path='/books/new' element={<AddBookPage book={books} setBook={setBooks} />} />
            <Route path='/edit/:id' element={<EditForm book={books} setBook={setBooks} />} />
            <Route path='/books' element={<ReadingList book={books} setBook={setBooks} />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
