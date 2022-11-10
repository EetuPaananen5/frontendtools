import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';

 export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']


})
export class CalculatorComponent implements OnInit {

  result: string = " ";
  buttons: string[] = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'C', '0', '+', '=',];
  tiles: Tile[] = [
    {text: 'One', cols: 4, rows: 1, color: 'lightblue'},]

  addValue(value: string) :void{
    
 

    if (value == '=') {

   try {
    this.result = eval(this.result);
    
   } catch (error) {
    this.result="ERROR"
    
   }
     
    }

    else if (value == 'C')
    {
      this.result='';
    }
    else {

    this.result = this.result + value; }}


  constructor() { }

  ngOnInit(): void {
  }

}


export class GridListOverviewExample { }