import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  profileForm: FormGroup;

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

  get passworld() {
    return this.profileForm.get('pasworld');
  }
  get confirmpassworld() {
    return this.profileForm.get('pasworld');
  }

  get personID() {
    return this.profileForm.get('personID');
  }

  get acceptCheckbox() {
    return this.profileForm.get('acceptCheckbox');
  }



  constructor() {
    this.profileForm = new FormGroup({
      firstName: new FormControl('Iiro', [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z]*$')]),
      lastName: new FormControl('Haanpaa', [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z]*$')]),
      passworld: new FormControl('kalakukko', [Validators.required, Validators.minLength(10), Validators.pattern('^[a-zA-Z]*$')]),
      confirmpassworld: new FormControl('kalakukko', [Validators.required, Validators.minLength(10), Validators.pattern('^[a-zA-Z]*$')]),
      personID: new FormControl('060300b67C', [Validators.required, Validators.minLength(10), Validators.pattern('^(0[1-9]|[12]\\d|3[01])(0[1-9]|1[0-2])([5-9]\\d+|\d\d-|[01]\\dA)\\d{3}[\\dA-Z]')]),
      acceptCheckbox: new FormControl('' , [Validators.requiredTrue]),
    })

  }

  ngOnInit(): void {
  }

}