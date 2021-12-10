import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookList from './bookList';
import AddNew from './addNew';
import { getAllBooks } from '../redux/books/books';

const Books = () => {
  const [itemid, setItemid] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBooks());
  }, [itemid, dispatch]);

  const books = useSelector((state) => state.booksReducer);

  return (
    <div className="container">
      <div className="inner">
        <BookList books={books} />
        <hr />
        <AddNew setItemid={setItemid} />
      </div>
    </div>
  );
};

export default Books;
