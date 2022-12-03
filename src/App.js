import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import BooksList from './components/booklist/BooksList';
import CreateBook from './components/booklist/CreateBook';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/bookslist' element={<BooksList />} />
          <Route path='/createbook' element={<CreateBook />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
