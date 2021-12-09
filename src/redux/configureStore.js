import {
  createStore, combineReducers, compose, applyMiddleware,
} from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import booksReducer from './books/books';

const reducer = combineReducers({
  booksReducer,
  // additional reducers could be added here
});

const composed = compose(applyMiddleware(thunkMiddleware, logger));

const store = createStore(
  reducer,
  composed,
);

export default store;
