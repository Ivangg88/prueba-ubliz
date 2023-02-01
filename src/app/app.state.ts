import { Book } from './models/books';

export interface AppState {
  readonly books: Book[];
}
