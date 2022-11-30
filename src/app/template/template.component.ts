import { Component, OnInit } from '@angular/core';
import {FormControl, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {





  pwrd: any;
  firstName: any;
  lastName: any;
  personId: any;
  email: any;
  Username: any;
  Password: any;
  ConfirmPassword: any;
  hasAcceptedTerms: any;
  acceptCheckbox: any;
  onSubmit(x: any): any {

  }
  constructor() { }

  ngOnInit(): void {
  }

OnSubmit(e: { value: { firstName: any; }; conrols: { [x: string]: { status: any; }; }; }){
  console.log(e.value.firstName);
  console.log(e.conrols['firstName'].status);
}


}
