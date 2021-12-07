import React from 'react';
import BookList from '../../components/bookList';
import AddNew from '../../components/addNew';

const Books = () => (
  <div className="container">
    <div className="inner">
      <BookList />
      <AddNew />
    </div>
  </div>
);

export default Books;
