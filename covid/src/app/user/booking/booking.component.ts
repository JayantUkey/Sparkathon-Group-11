import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  @Input() vaccination:any;
  @Input() Book:any;
  @Output() deletefav = new EventEmitter;
  id:any;
  name:any;
  image:any;
  description: any;
  removefun(data:any){
    this.deletefav.emit({cardname: this.name, image : this.image, id: Math.random(), description: this.description, fav:0});
    this.Book.splice(0,1);
    console.log(this.Book);
  }
    check(){
        alert('Your have suucessfully booked your slot for vaccination!');
      }
 
  constructor() { }

  ngOnInit(): void {
  }

}
