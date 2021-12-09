import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './navbar';
import Books from './BookPage';
import Categories from './CategoriesPage';
import styles from '../styles/BookStore.module.css';

const BookStore = () => (
  <div className={styles.bookStore}>
    <div className={styles.bookStoreCont}>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  </div>
);

export default BookStore;
