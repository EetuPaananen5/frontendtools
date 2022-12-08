import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from "@angular/router";
import { AuthServiceService } from '../services/auth-service.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;

  //email = new FormControl('', [Validators.required, Validators.email]);


  // password = new FormControl( ' ')

  matcher = new MyErrorStateMatcher();

  loginForm: FormGroup ;



  constructor(public aservice: AuthServiceService, public router: Router) {
    this.loginForm = new FormGroup({
      Email: new FormControl('', [Validators.required, Validators.minLength(10), Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern('^[a-zA-Z]*$')]),
    })

  }
  get Email() {
    return this.loginForm.get('Email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  ngOnInit(): void {
  }

  loginnappi(): void {
    // this.aservice.navigate(['admin']);
    console.log(this.loginForm.value, 'kokokokoko');
    console.log(this.Email, 'ddddddddd');
    console.log(this.loginForm.value.password);
    console.log(this.loginForm.value.Email);
    this.aservice.login(this.Email, this.password);

  }


  cancelnappi(): void {
    
    this.router.navigate(['calculator']);

    console.log('canseeel')

  }


}
