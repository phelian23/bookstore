import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import BookStore from './components/BookStore';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <BookStore />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
