import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TermekeinkrolComponent } from './termekeinkrol/termekeinkrol.component';
import { FooldalComponent } from './fooldal/fooldal.component';
import { AszfComponent } from './aszf/aszf.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  { path: '', redirectTo: '/fooldal', pathMatch: 'full' },
  { path: 'fooldal', component: FooldalComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'termekeinkrol', component: TermekeinkrolComponent },
  { path: 'aszf', component: AszfComponent },
  { path: 'product', component: ProductComponent },
  { path: 'cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
