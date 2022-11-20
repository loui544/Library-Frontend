import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookService } from './../../../services/book.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  book = {
    id : '',
    image : '',
    name : '',
    resume : '',
    author : '',
    publisher : '',
    date : '',
    quantity : ''
  }

  constructor(private bookService:BookService, private snack:MatSnackBar,private router:Router) { }

  ngOnInit(): void {
  }
  formSubmit(){
    if(this.book.name.trim() == '' || this.book.name == null){
      this.snack.open("El título es requerido !!",'',{
        duration:3000
      })
      return ;
    }

    this.bookService.updateBook(this.book).subscribe(
      (dato:any) => {
        this.book.image = '';
        this.book.name = '';
        this.book.resume = '';
        this.book.author = '';
        this.book.publisher = '';
        this.book.date = '';
        this.book.quantity = '';
        Swal.fire('Book added','Book added successfully','success');
        this.router.navigate(['/admin/categorias']);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !!','Error saving book','error')
      }
    )
  }

}
