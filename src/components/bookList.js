import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './bookItem';
import styles from '../styles/bookList.module.css';

const BookList = ({ books }) => (
  <ul className={styles.booklistCont}>
    {books.map((book) => (
      <BookItem
        key={book.item_id}
        book={book}
      />
    ))}
  </ul>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape(
    {
      item_id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    },
  )).isRequired,
};

export default BookList;
