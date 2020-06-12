import { BooksComponent } from './books/books.component';

import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'details', component: DetailsComponent},
  {path: 'books', component: BooksComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
