import { Component, OnInit } from '@angular/core';
import { Product } from '../entities/product.entity';
import { ProductService } from '../product.service';
import { AuthenticationService } from '../_services/authentication.service';
import { Router } from '@angular/router';
import { Item } from '../entities/item.entity';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
	styleUrls: ['./product.component.css'],
	providers: [MatSnackBar]
})

export class ProductComponent implements OnInit {

  private items: Item[] = [];
	private total: number = 0;
	private inputNumber1: number;
	private inputNumber2: number;
	private inputNumber3: number;
	private inputNumber4: number;
	private inputNumber5: number;
	private inputNumber6: number;

  private products: Product[];

  constructor(
    private productService: ProductService,
    private authenticationservice: AuthenticationService, 
    private router: Router,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.products = this.productService.findAll();
  }

  kosarhoz(productID, inputNumber) {
		const loggedUser = this.authenticationservice.currentUserValue;

    if ( loggedUser != null ) {
      var id = productID;
      
			if (id) {
				var item: Item = {
					product: this.productService.find(id),
					quantity: inputNumber
        };
        
				if (localStorage.getItem('cart') == null) {
					let cart: any = [];
					cart.push(JSON.stringify(item));
					localStorage.setItem('cart', JSON.stringify(cart));
				} else {
					let cart: any = JSON.parse(localStorage.getItem('cart'));
					let index: number = -1;
					for (var i = 0; i < cart.length; i++) {
            let item: Item = JSON.parse(cart[i]);
						if (item.product.id == id) {
							index = i;
							break;
						}
          }
          
					if (index == -1) {
						cart.push(JSON.stringify(item));
						localStorage.setItem('cart', JSON.stringify(cart));
					} else {
						let item: Item = JSON.parse(cart[index]);
						item.quantity += inputNumber;
						cart[index] = JSON.stringify(item);
						localStorage.setItem("cart", JSON.stringify(cart));
					}
        }
        
        this.loadCart();
        this.openSnackBar("Sikeresen hozzáadva a kosárhoz!", "Bezárás");
			} else {
				this.loadCart();
      }
    } else {
      this.router.navigate(['/login'], { queryParams: { returnUrl: '/product' }});
    }
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

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
			duration: 3000,
    });
  }

}
