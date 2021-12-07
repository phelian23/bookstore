import React from 'react';

const AddNew = () => (
  <form className="form-container">
    <h3>ADD NEW BOOK</h3>
    <input
      type="text"
      className="input-text"
      placeholder="Book title"
    />
    <select name="select" placeholder="categories">
      <option value="action">Action</option>
      <option value="science fiction">Science Fiction</option>
      <option value="Economy">Economy</option>
    </select>
    <button type="submit" className="input-submit">Submit</button>
  </form>
);

export default AddNew;
