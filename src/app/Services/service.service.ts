import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' }
  ];

  getAllProducts() {
    return this.products;
  }

  getProductById(prdId: any) {
    if (isNaN(prdId)) {
      return null;
    }
    
    const id = Number(prdId);
    const product = this.products.find(p => p.id === id);

    return product || null;
  }

  constructor() { }
}





