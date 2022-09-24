import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
lnk="";
fav1:any[]=[];
sts: any;
  constructor() { }

  ngOnInit(): void {
  }
  
}
