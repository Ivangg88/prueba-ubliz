import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Componente2Component } from './components/componente2/componente2.component';

const routes: Routes = [{ path: 'list', component: Componente2Component }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
