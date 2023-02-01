import { createAction } from '@ngrx/store';
import { Book } from '../models/books';

export type BookActions = 'Add books' | 'Delete book';
export const ADD_BOOKS: BookActions = 'Add books';
export const DELETE_BOOKS: BookActions = 'Delete book';

export const addBooks = createAction(ADD_BOOKS);
export const DeleteBook = createAction(DELETE_BOOKS);
