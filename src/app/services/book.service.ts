import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  public bookList(){
    return this.http.get(`${baserUrl}/library/books/read`);
  }

  public addBook(book:any){
    return this.http.post(`${baserUrl}/library/books/create`,book);
  }

  public updateBook(book:any){
    return this.http.put(`${baserUrl}/library/books/update/`,book);
  }

  public deleteBook(book:any){
    return this.http.delete(`${baserUrl}/library/books/delete/`,book);
  }
}
