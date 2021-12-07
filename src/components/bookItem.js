import React from 'react';
import PropTypes from 'prop-types';

const BookItem = ({ book }) => {
  const { title, author, id } = book;

  return (
    <li>
      <div>
        <h3>{title}</h3>
        <p>{author}</p>
        <button type="button" itemID={id}>Remove</button>
      </div>
    </li>
  );
};

BookItem.propTypes = {
  book: PropTypes.shape(
    {
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    },
  ).isRequired,
};

export default BookItem;
