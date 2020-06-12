import { DetailsService } from './../service/details.service';
import { Book } from './../interface/book.interface';
import { Component, TemplateRef } from '@angular/core';

import { Router } from '@angular/router';
import { BooksService } from '../service/books.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';



const navigateMap = {
     1: 'details',
     3: 'books'
};
@Component({
    selector: 'book-list',
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.scss']
})
export class BooksComponent{
    userId: string='';
    bookId: string='';
    authorName: string='';
    bookName: string='';
    educationName: string='';
    details: Book[];
    type = '3';
    selectedBook: Book;
    modalRef: BsModalRef;
    targetbBook: Book;
    
    
    constructor(private detailsService: DetailsService, private router: Router, private modalService: BsModalService){}
    public tagClick(type){
        this.type=type;
        const url = navigateMap[type];
        if(url){
        this.router.navigate([url]);
        }
    }
    public search(){
        const params = {
            userId: this.userId,
            bookId: this.bookId,
            authorName: this.authorName,
            bookName:this.bookName,
            educationName: this.educationName
        }
        this.detailsService.search(params).subscribe((details: Book[]) => {
            this.details = details;
        })
    }
    public insert(){
        this.userId = '';
        this.bookId = '';
        this.authorName = '';
        this.bookName = '';
        this.educationName = '';    
    }
    public edit(template: TemplateRef<any>,book: Book){
        this.targetbBook =book;
        this.selectedBook= {
            bookId: book.bookId,
            bookName: book.bookName,
            authorName: book.authorName,
            educationName: book.educationName,
            quantity: book.quantity
        }
        this.modalRef= this.modalService.show(template);
      }
      public save(){
          this.modalRef.hide();
          this.targetbBook.bookId =this.selectedBook.bookId;
          this.targetbBook.bookName =this.selectedBook.bookName;
          this.targetbBook.authorName=this.selectedBook.authorName;
          this.targetbBook.educationName=this.selectedBook.educationName;
          this.targetbBook.quantity=this.selectedBook.quantity;


      }
}