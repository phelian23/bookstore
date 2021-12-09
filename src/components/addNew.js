import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';
import styles from '../styles/addNew.module.css';

const AddNew = () => {
  const [inputValues, setInputValues] = useState({
    title: '',
    category: '',
    errMsg: '',
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

    if (title.trim()) {
      if (category.trim()) {
        const newBook = {
          item_id: id,
          title,
          category,
        };
        dispatch(addBook(newBook));
      } else {
        setInputValues({
          errMsg: 'Please select category',
        });
      }
    } else {
      setInputValues({
        errMsg: 'Please Add Title',
      });
    }
  };

  return (
    <form className={styles.form} onSubmit={submitBookToStore}>
      <h3 className={styles.heading}>ADD NEW BOOK</h3>
      <input
        type="text"
        name="title"
        placeholder="Book title"
        onChange={onChange}
        className={styles.title}
      />
      <select className={styles.category} name="category" onChange={onChange} required>
        <option>Category</option>
        <option value="Action">Action</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Economy">Economy</option>
        <option value="Cooking">Cooking</option>
        <option value="Non-Fiction">Non-Fiction</option>
        <option value="History">History</option>
        <option value="Romance">Romance</option>
      </select>
      <button type="submit" className="input-submit">ADD BOOK</button>
      <br />
      <span>{inputValues.errMsg}</span>
    </form>
  );
};

export default AddNew;
