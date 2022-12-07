import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CinemaService } from '../services/cinema.service';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {

  searchTerm: string="";
  panelOpenState = false;
  cinemaData$: Observable<any>;
  
  constructor(public cinemaservice: CinemaService) 
  { 
   
    this.cinemaData$ = this.cinemaservice.getTestData();
    this.cinemaData$ = this.cinemaservice.getData();
 
  }



  ngOnInit(): void {

  }

}
