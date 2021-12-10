/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import styles from '../styles/bookItem.module.css';
import Capturepie from '../images/Capturepie.PNG';

const BookItem = ({ book }) => {
  const dispatch = useDispatch();

  const { item_id, title, category } = book;

  const id = item_id;

  return (
    <li className={styles.listCont}>
      <div className={styles.box1}>
        <h5 className={styles.category}>{category}</h5>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.author}>Wole Shoyinka</p>
        <button type="button" className={styles.listBtn}>Comment</button>
        <button type="button" className={styles.listBtn} onClick={() => dispatch(removeBook(id))}>Remove</button>
        <button type="button" className={styles.listBtn}>Edit</button>
      </div>
      <div className={styles.box2}>
        <img src={Capturepie} alt="pie" />
        <div>
          <p className={styles.percentComplete}>64%</p>
          <p className={styles.completed}>Completed</p>
        </div>
      </div>
      <div className={styles.box3}>
        <p className={styles.currentChapter}>CURRENT CHAPTER</p>
        <p className={styles.currentLesson}>Chapter 17</p>
        <button className={styles.rectangle} type="button">UPDATE PROGRESS</button>
      </div>
    </li>
  );
};

BookItem.propTypes = {
  book: PropTypes.shape(
    {
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      item_id: PropTypes.string.isRequired,
    },
  ).isRequired,
};

export default BookItem;
