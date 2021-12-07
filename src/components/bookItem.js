import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const BookItem = ({ book }) => {
  const dispatch = useDispatch();

  const { title, id, category } = book;

  return (
    <li>
      <div>
        <h5>{category}</h5>
        <h3>{title}</h3>
        <button type="button" onClick={() => dispatch(removeBook(id))}>Remove</button>
      </div>
    </li>
  );
};

BookItem.propTypes = {
  book: PropTypes.shape(
    {
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    },
  ).isRequired,
};

export default BookItem;
