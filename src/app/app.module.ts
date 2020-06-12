import { BooksComponent } from './books/books.component';
import { BooksService } from './service/books.service';
import { DetailsService } from './service/details.service';
import { LoginService } from './service/login.service';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DetailsComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ModalModule.forRoot()
  ],
  providers: [LoginService,DetailsService,BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
