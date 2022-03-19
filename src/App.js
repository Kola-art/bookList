import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import RoutePage from './Routes';
import { BooksProvider } from './context/BooksContext'

function App() {
  const [books, setBooks] = useState([]);
   
  return (
    <>
     <BooksProvider books= {books} setBooks={setBooks}>
        <BrowserRouter >
          <Header />
          <RoutePage />
        </BrowserRouter>
      </BooksProvider>
    </>
  );
}

export default App;
