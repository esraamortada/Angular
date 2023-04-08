import { Component } from '@angular/core';
import { IProduct } from '../shared classes/IProduct';
import { ICategory } from '../shared classes/ICategory';

 import { DiscountOffers } from '../shared classes/DiscountOffers';




@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  Discount:DiscountOffers=DiscountOffers.NoDiscount;
  Storename:string ="Store1"; 
  Storelogo:string ="/assets/1.jpg"; 
  
  ProductList:IProduct[]= [{ID:1,Name:"p1",Quantity:5,Price:15000,Img:"/assets/1.jpg"},
  {ID:2,Name:"p2",Quantity:5,Price:15000,Img:"/assets/1.jpg"},
  {ID:3,Name:"p3",Quantity:5,Price:15000,Img:"/assets/1.jpg"},
  {ID:4,Name:"p4",Quantity:5,Price:15000,Img:"/assets/1.jpg"}]; 
  
  CategoryList:ICategory[]= [{ID:1,Name:"cat1"},
    {ID:2,Name:"cat2"},
    {ID:3,Name:"cat3"},
    {ID:4,Name:"cat4"}];
  
  // IsPurshased:boolean=false;   
  // discount:DiscountOffers=DiscountOffers.Discount1;
  // showDiscount():void{
  //   if(this.discount==DiscountOffers.Discount1){
  //     this.IsPurshased=true
  //   }
  //   else{
  //     this.IsPurshased=false
  //   }

  // }

 


  ClientName :string="ESRAA"; 
  message="";


  isPurchased: boolean = false;
  clientName: string = '';

  buy() {
    this.isPurchased = true;
    this.clientName = 'ESRAA'; 
  }



  // Discount:DiscountOffers; 
   
 
   
  constructor(){
    this.Discount = DiscountOffers.Discount1;
 
   }

}
