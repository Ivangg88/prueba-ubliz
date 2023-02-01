import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/books';
import { addBooks, DeleteBook } from 'src/app/store/books.actions';
import { bookList } from '../../../utils/data';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css'],
})
export class Componente2Component implements OnInit {
  bookStore: Observable<Book[]>;
  bookList: Book[] = [];

  constructor(private store: Store<{ books: Book[] }>) {
    this.bookStore = store.select('books');
  }

  ngOnInit(): void {
    this.bookStore.subscribe((res: any) => (this.bookList = res));
  }

  deleteBook() {
    if (this.bookList.length < 1) {
      return;
    }
    this.store.dispatch(DeleteBook());
  }
}
