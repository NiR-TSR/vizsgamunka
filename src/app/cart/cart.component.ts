import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../entities/product.entity';
import { Item } from '../entities/item.entity';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  private items: Item[] = [];
	private total: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
				this.loadCart();
  }

  loadCart(): void {
		this.total = 0;
    this.items = [];
    
    let cart = JSON.parse(localStorage.getItem('cart'));
    
		for (var i = 0; i < cart.length; i++) {
			let item = JSON.parse(cart[i]);
			this.items.push({
				product: item.product,
				quantity: item.quantity
      });
      
			this.total += item.product.price * item.quantity;
		}
	}

	remove(id: string): void {
		let cart: any = JSON.parse(localStorage.getItem('cart'));
    let index: number = -1;
    
		for (var i = 0; i < cart.length; i++) {
			let item: Item = JSON.parse(cart[i]);
			if (item.product.id == id) {
				cart.splice(i, 1);
				break;
			}
    }
    
		localStorage.setItem("cart", JSON.stringify(cart));
		this.loadCart();
  }
  
  leadas(): void {
    alert('Sikeresen leadva!');
    this.router.navigate(['/fooldal']);
    let cart: any = JSON.parse(localStorage.getItem('cart'));
    localStorage.removeItem('cart');
  }

}
