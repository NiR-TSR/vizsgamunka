import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-termekeinkrol',
  templateUrl: './termekeinkrol.component.html',
  styleUrls: ['./termekeinkrol.component.css']
})
export class TermekeinkrolComponent implements OnInit {

  constructor(
    private authenticationservice: AuthenticationService, 
    private router: Router) { }

  ngOnInit() {
  }

  kosarhoz() {
    const loggedUser = this.authenticationservice.currentUserValue;

    if ( loggedUser != null ) {
      // addToKosar
    } else {
      this.router.navigate(['/login'], { queryParams: { returnUrl: '/termekeinkrol' }});
    }
  }

}
