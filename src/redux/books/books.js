import { getBooks, postBooks, deleteBook } from '../../components/api';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const FETCH_BOOKS = 'bookStore/books/FETCH_BOOKS';

const initialState = [];

const organizeBook = (obj) => {
  const books = [];

  (Object.keys(obj)).map((key) => {
    const book = obj[key][0];
    book.item_id = key;
    books[books.length] = book;
    return books;
  });

  return books;
};

export const getAllBooks = () => async (dispatch) => {
  try {
    const obj = await getBooks();

    dispatch({ type: FETCH_BOOKS, payload: obj });
  } catch (error) {
    throw new Error(error.message);
  }
};

export const addBook = (book) => async (dispatch) => {
  try {
    await postBooks(book);

    dispatch({ type: ADD_BOOK, payload: book });
  } catch (error) {
    throw new Error(error.message);
  }
};

export const removeBook = (id) => async (dispatch) => {
  try {
    await deleteBook(id);

    dispatch({ type: REMOVE_BOOK, payload: id });
  } catch (error) {
    throw new Error(error.message);
  }
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case FETCH_BOOKS:
      return organizeBook(action.payload);

    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);

    default:
      return state;
  }
};

export default bookReducer;
