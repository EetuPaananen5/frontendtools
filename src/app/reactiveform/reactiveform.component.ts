import { Component, OnInit } from '@angular/core';
import { FormBuilder, } from '@angular/forms';
import { FormControl, FormGroupDirective, NgForm, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  profileForm: FormGroup;

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();

  hide = true;

  onSubmit() {
    console.log('profileForm.value: ' + this.profileForm.value);
    console.log('profileForm.value: ' + this.profileForm.value.firstName);
    console.log('profileForm.valid: ' + this.profileForm.valid);
    this.profileForm.reset();
  }

  get firstName() {
    return this.profileForm.get('firstName');
  }

  get lastName() {
    return this.profileForm.get('lastName');
  }
  get personID() {
    return this.profileForm.get('personID');
  }

  get password() {
    return this.profileForm.get('password');
  }
  get confirmpassword() {
    return this.profileForm.get('confirmpassword');
  }

  get acceptCheckbox() {
    return this.profileForm.get('acceptCheckbox');
  }
  get Username() {
    return this.profileForm.get('Username');
  }
  get email() {
    return this.profileForm.get('email');
  }



  constructor() {
    this.profileForm = new FormGroup({
      firstName: new FormControl('Iiro', [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z]*$')]),
      lastName: new FormControl('Haanpaa', [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z]*$')]),
      personID: new FormControl('010100A677C', [Validators.required, Validators.minLength(10), Validators.pattern('^(0[1-9]|[12]\\d|3[01])(0[1-9]|1[0-2])([5-9]\\d+|\\d\\d-|[01]\\dA)\\d{3}[\\dA-Z]')]),
      Username: new FormControl('Iirokuu12', [Validators.required, Validators.minLength(6)]),
      email: new FormControl('iiro.joo@gmai.com', [Validators.required, Validators.minLength(10)]),
      password: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{10,}$')]),
      confirmpassword: new FormControl('', [Validators.required, Validators.minLength(10)]),
      acceptCheckbox: new FormControl(  [Validators.required]), })}
    

  ngOnInit(): void {

  }

}
