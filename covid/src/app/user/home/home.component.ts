import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() sts:any;
  @Input() vaccination:any;
  @Input() favv:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
