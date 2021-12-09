import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddNew = () => {
  const [inputValues, setInputValues] = useState({
    title: '',
    category: '',
  });
  const dispatch = useDispatch();

  const onChange = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  const submitBookToStore = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const { title, category } = inputValues;

    const newBook = {
      item_id: id,
      title,
      category,
    };
    dispatch(addBook(newBook));
  };

  return (
    <form className="form-container" onSubmit={submitBookToStore}>
      <h3>ADD NEW BOOK</h3>
      <input
        type="text"
        className="input-text"
        name="title"
        placeholder="Book title"
        onChange={onChange}
        required
      />
      <select placeholder="categories" name="category" onChange={onChange} required>
        <option>Category</option>
        <option value="Action">Action</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Economy">Economy</option>
        <option value="Cooking">Cooking</option>
        <option value="Non-Fiction">Non-Fiction</option>
        <option value="History">History</option>
        <option value="Romance">Romance</option>
      </select>
      <button type="submit" className="input-submit">Submit</button>
    </form>
  );
};

export default AddNew;
