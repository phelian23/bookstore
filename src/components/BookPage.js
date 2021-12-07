import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import BookList from './bookList';
import AddNew from './addNew';

const Books = () => {
  const books = [
    {
      title: '',
      author: '',
      id: uuidv4(),
    },
  ];

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
