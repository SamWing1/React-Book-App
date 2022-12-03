import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import AddBookPage from '../AddBookPage/AddBookPage';
import ReadingList from '../ReadingList/ReadingList';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());

  const [books, setBooks] = useState([
    { name: "Moby Dick", currentPage: 3, currentlyReading: "Yes" },
    { name: "Black Sci-Fi Short Stories", currentPage: 110, currentlyReading: "Yes" },
    { name: "Abhorsen", currentPage: 1, currentlyReading: "No" },
  ])

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path='/books/new' element={<AddBookPage />} />
            <Route path='/books' element={<ReadingList books={books} />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
