import { Component, OnInit } from '@angular/core';
import {FormControl, NgForm, Validators} from '@angular/forms';
import { Person } from '../person';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  person:Person;

  constructor() {
    this.person=new Person
   }

  ngOnInit(): void {
  }

OnSubmit(formdata: any){
  console.log(formdata.value.firstName);
  console.log(formdata.value.lastName);
  console.log(formdata.value.personId);
  console.log(formdata.value.passWord);
  formdata.reset();
}


}
