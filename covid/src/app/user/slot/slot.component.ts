import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.css']
})
export class SlotComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  lnk="";
  fav1:any[]=[];
  image:any;
  cardname:any;
  price:any;
  type:any;
  vaccination=[
  {
  id:1,
  image:"https://img.freepik.com/free-vector/cartoon-vaccination-campaign-illustration_52683-62384.jpg?size=338&ext=jpg&ga=GA1.2.873670002.1658073867",
  name :"covidshield",
  hname:"Matrachaya Hopsital",
  description:200,
  dose:1,
  slot:"9am-10am",
  buttontxt:"Book Now",
  fav:0,
},
{
  id:2,
image:"https://img.freepik.com/free-vector/cartoon-vaccination-campaign-illustration_52683-62384.jpg?size=338&ext=jpg&ga=GA1.2.873670002.1658073867",
name :"Co-vaccine",
hname:"Matrachaya Hospital",
description:0,
dose:2,
slot:"10am-11am",
buttontxt:"Book Now",
fav:0,
},
{
id:3,
image:"https://img.freepik.com/free-vector/cartoon-vaccination-campaign-illustration_52683-62384.jpg?size=338&ext=jpg&ga=GA1.2.873670002.1658073867",
name :"Covidshield",
hname:"LifeLine Hospital",
description:0,
dose:2,
slot:"1pm-2pm",
buttontxt:"Book Now",
fav:0,
},
{
  id:4,
  image:"https://img.freepik.com/free-vector/cartoon-vaccination-campaign-illustration_52683-62384.jpg?size=338&ext=jpg&ga=GA1.2.873670002.1658073867",
  name :"Co-Vaccine",
  hname:"REGENCY",
  description:300,
  dose:1,
  slot:"9am-10am",
  buttontxt:"Book Now",
  fav:0,
},
{
  id:5,
  image:"https://img.freepik.com/free-vector/cartoon-vaccination-campaign-illustration_52683-62384.jpg?size=338&ext=jpg&ga=GA1.2.873670002.1658073867",
  name :"Co-Vaccine",
  hname:"LifeLine Hospital",
  description:500,
  dose:1,
  slot:"4pm-5pm",
  buttontxt:"Book Now",
  fav:0,
},
{
  id:6,
  image:"https://img.freepik.com/free-vector/cartoon-vaccination-campaign-illustration_52683-62384.jpg?size=338&ext=jpg&ga=GA1.2.873670002.1658073867",
  name :"covidhsield",
  hname:"AIIMS",
  description:800,
  dose:1,
  slot:"9am-10am",
  buttontxt:"Book Now",
  fav:0,
}, 

]
updatelnk(data:string){
  this.lnk =data;
  this.fav1=this.vaccination.filter(item=>item.fav==1)    
 }
 searchitem(data:any){
  this.vaccination=this.vaccination.filter((item: { name: string | any[];})=>item.name.indexOf(data)>=0);
 }
}
