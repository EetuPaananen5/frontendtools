import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';
import { Question } from '../question';
import { LippuSService } from '../services/lippu-s.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

interface Lippu {
  value: string;
  viewValue: string;
}




@Component({
  selector: 'app-lippu',
  templateUrl: './lippu.component.html',
  styleUrls: ['./lippu.component.css']
})
export class LippuComponent implements OnInit {

  myEmail: any;
  myName: any;
  msg: any;

  clickEvent() {
    this.msg = "Button is Clicked";
    return this.msg;
  }


  profileForm: FormGroup;
  onSubmit() {
    this.profileForm.reset();
  }
  

  get firstName() {
    return this.profileForm.get('firstName');
  }

  get lastName() {
    return this.profileForm.get('lastName');
  }

  email = new FormControl('', [Validators.required, Validators.email]); //emailin validiointi ja error messaget
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

 selectedValue!: string; //lipputyyppi
 
 lippuTyyppit: Lippu[] = [ // tässä on lipputyypit
    {value: '16€', viewValue: 'Normaali Lippu'},
    {value: '10€', viewValue: 'Opiskelija Lippu'},
    {value: '8€', viewValue: 'Eläkeläis Lippu'},
  ];

  buttonClicked() { //tämä toimi mutta button on kommenteissa
    let value = 5;
    console.log(`The button was clicked and the value is ${value}!`);
  }

 
  saveall: Question[];
  questions: Question[] ; //lippuS Serviceen vienti

  onInputChange(e : any, q: Question): void { //lippujen kokonaismäärän tulostus ja määritelmät

    if(e.value==0){
      q.answear="1";
      console.log(e.value);
    }
    if(e.value==1){
      q.answear="2";
      console.log(e.value);
    }
    if(e.value==2){
      q.answear="3";
      console.log(e.value);
    }
    if(e.value==3){
      q.answear="4";
      console.log(e.value);
    }
  }

  constructor(lippuservice: LippuSService) {  //täältä löytyy validiointeja
    this.profileForm = new FormGroup({
      firstName: new FormControl('Iiro', [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z]*$')]),
      lastName: new FormControl('Haanpaa', [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z]*$')]),
    })

    this.questions = lippuservice.getData(); //vienti lippuserviceen
    this.saveall = lippuservice.getData(); //Tietojen tallentaminen lippuserviceen
    
 
  }



  ngOnInit(): void {
  }

}
