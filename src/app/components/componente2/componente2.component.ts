import { Component } from '@angular/core';
import { bookList } from '../../../utils/data';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css'],
})
export class Componente2Component {
  bookList = bookList;
}
