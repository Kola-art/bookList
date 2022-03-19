import React from 'react';

export const BooksContext = React.createContext();

export const BooksProvider = ({ children, books, setBooks }) => {

  return (
    <BooksContext.Provider value={ [books, setBooks] }>
      {children}
    </BooksContext.Provider>
  );
};