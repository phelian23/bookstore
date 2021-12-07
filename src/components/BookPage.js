import React from 'react';
import { useSelector } from 'react-redux';
import BookList from './bookList';
import AddNew from './addNew';

const Books = () => {
  const books = useSelector((state) => state.booksReducer);

  return (
    <div className="container">
      <div className="inner">
        <BookList books={books} />
        <AddNew />
      </div>
    </div>
  );
};

export default Books;
