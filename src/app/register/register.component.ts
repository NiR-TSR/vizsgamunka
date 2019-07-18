import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UserService } from '../_services/user.service';
import { AuthenticationService } from '../_services/authentication.service';
import { AlertService } from '../_services/alert.service';
import { Location } from '@angular/common';


@Component({ 
    templateUrl: 'register.component.html',
    styleUrls: ['./register.component.css']})

export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private alertService: AlertService,
        private _location: Location
    ) {
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', Validators.required],
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
            checkbox: ['', Validators.required],
        });
    }

    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        this.alertService.clear();

        if (this.registerForm.invalid) {
            return;
        }

        this.loading = true;
        this.userService.register(this.registerForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('A regisztráció sikeres volt.', true);
                    this.router.navigate(['/login'], { queryParams: { registered: true }});
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

    backClicked() {
        this._location.back();
    }
}
