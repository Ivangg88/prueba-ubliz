import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Book } from './models/books';
import { addBooks } from './store/books.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'prueba-ubliz';

  constructor(private store: Store<{ books: Book[] }>) {
    store.dispatch(addBooks());
  }
}
