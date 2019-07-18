import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { fakeBackendProvider } from './_helpers/fake-backend';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';

import { SzamolosComponent } from './szamolos/szamolos.component';
import { TermekeinkrolComponent } from './termekeinkrol/termekeinkrol.component';
import { FooldalComponent } from './fooldal/fooldal.component';
import { AszfComponent } from './aszf/aszf.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { AlertComponent } from './_components/alert.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatSnackBarModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SzamolosComponent,
    TermekeinkrolComponent,
    FooldalComponent,
    AszfComponent,
    ProductComponent,
    CartComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    OverlayModule,
    MatSnackBarModule,
    ScrollToModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
