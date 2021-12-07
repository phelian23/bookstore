import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './navbar';
import Books from '../redux/books/books';
import Categories from '../redux/categories/categories';
import './App.css';

const BookStore = () => (
  <div>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </div>
);

export default BookStore;
