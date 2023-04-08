import { Component } from '@angular/core';
import { IProduct } from '../shared classes/IProduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  Products:IProduct[]= [{ID:1,Name:"p1",Quantity:5,Price:15000,Img:"/assets/1.jpg"},
  {ID:2,Name:"p2",Quantity:5,Price:15000,Img:"/assets/1.jpg"},
  {ID:3,Name:"p3",Quantity:5,Price:15000,Img:"/assets/1.jpg"},
  {ID:4,Name:"p4",Quantity:5,Price:15000,Img:"/assets/1.jpg"}]; 

 
  

}
