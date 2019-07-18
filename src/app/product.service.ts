import { Injectable } from '@angular/core';
import { Product } from './entities/product.entity';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private products: Product[];

  constructor() {
    this.products = [
        { id: '001', name: 'Tradizionale', price: 2990, photo: './assets/resources/html_img/Tradizionale.png' },
        { id: '002', name: 'Nero', price: 3490, photo: './assets/resources/html_img/Nero.png' },
        { id: '003', name: 'Brasiliano', price: 3290, photo: './assets/resources/html_img/Brasiliano.png' },
        { id: '004', name: 'Cioccolato', price: 3190, photo: './assets/resources/html_img/Cioccolato.png' },
        { id: '005', name: 'Fruttato', price: 2790, photo: './assets/resources/html_img/Fruttato.png' },
        { id: '006', name: 'Cremoso', price: 2890, photo: './assets/resources/html_img/Cremoso.png' }
      ];
   }

  findAll(): Product[] {
    return this.products;
  }

  find(id: string): Product {
    return this.products[this.getSelectedIndex(id)];
  }

  private getSelectedIndex(id: string) {
    for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].id == id) {
            return i;
        }
    }
    return -1;
  }

}
