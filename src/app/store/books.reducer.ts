import { Book } from '../models/books';
import * as BooksActions from './books.actions';
import { createReducer, on } from '@ngrx/store';
import { bookList } from 'src/utils/data';

const initialState: Book[] = [
  {
    name: 'Book name',
    code: 'Book code',
  },
];

export const booksReducer = createReducer(
  initialState,
  on(BooksActions.addBooks, (state) => (state = bookList)),
  on(BooksActions.DeleteBook, (state) =>
    state.filter((book, index) => index !== state.length - 1)
  )
);
