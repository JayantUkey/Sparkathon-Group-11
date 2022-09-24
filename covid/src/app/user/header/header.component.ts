import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
lnk="";
fav1:any[]=[];
  constructor() { }

  ngOnInit(): void {
  }
  updatelnk(data:string){
    this.lnk =data;
    //this.fav1=this.giftcard.filter(item=>item.fav==1)    
   }
}
