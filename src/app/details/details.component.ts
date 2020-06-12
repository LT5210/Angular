import { BooksService } from './../service/books.service';
import { Router } from '@angular/router';
import { DetailsService } from './../service/details.service';
import { Book } from './../interface/book.interface';
import { Component } from "@angular/core";

const navigateMap = {
    1: 'detailes',
    3: 'books'
};
@Component({
    selector: 'details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss']
})
export class DetailsComponent{
    userId: string='';
    bookId: string='';
    authorName: string='';
    bookName: string='';
    educationName: string='';
    details: Book[];
    type = '1';
    
    constructor(private booksService: BooksService, private router: Router){}
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
        this.booksService.search(params).subscribe((details: Book[]) => {
            this.details = details;
        })
    }
    public reset(){
        this.userId = '';
        this.bookId = '';
        this.authorName = '';
        this.bookName = '';
        this.educationName = '';    
    }
}

