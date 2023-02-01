import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Componente2Component } from './components/componente2/componente2.component';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, Componente2Component],
  imports: [BrowserModule, AppRoutingModule, TableModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
