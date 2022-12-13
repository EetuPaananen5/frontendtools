import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
 
  //userEmail$: Observable<string>;

  userEmail$: any;
  loginText: any;

  userEmail: BehaviorSubject<string> = new BehaviorSubject<string>('')
  checkLoggedIn() { return this.userEmail; } 


  constructor() {
  
   }

  ngOnInit(): void {
  }

}
