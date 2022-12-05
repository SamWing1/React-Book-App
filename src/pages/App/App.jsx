import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import AddBookPage from '../AddBookPage/AddBookPage';
import ReadingList from '../ReadingList/ReadingList';
import BookDetails from '../BookDetails/BookDetails'
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());

  const [books, setBooks] = useState([
    { name: "Moby Dick", currentPage: 3, currentlyReading: "Yes", note: "hardly remember, probably worth just starting again" },
    { name: "Black Sci-Fi Short Stories", currentPage: 110, currentlyReading: "Yes" },
    { name: "Abhorsen", currentPage: 1, currentlyReading: "No" },
  ])

  const addBook = (newBook) => {
    setBooks([...books, newBook])
  }

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path='/books/new' element={<AddBookPage addBook={addBook} />} />
            <Route path='/books' element={<ReadingList books={books} />} />
            <Route path='/BookDetails' element={<BookDetails books={books} />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
