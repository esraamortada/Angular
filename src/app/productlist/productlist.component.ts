import { Component ,OnInit} from '@angular/core';


import { ServiceService } from '../Services/service.service';





@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent  {
  products: any[] = [];
  
  constructor(public serviceService: ServiceService) {}

  
  renderValues() {
    this.products = this.serviceService.getAllProducts();
  }
  


  getProductById(prdId: any) {

    var product = this.serviceService.getProductById(prdId);
    console.log(product);
    
  //  this.products = this.serviceService.getProductById(prdId);
   
  }

}
