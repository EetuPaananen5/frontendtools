import { Injectable } from '@angular/core';
import { Question } from '../question';

@Injectable({
  providedIn: 'root'
})
export class LippuSService {

  saveall:any;
  
  questions: Array<Question>;

  getData():any{
    return this.questions
    return this.saveall
  } 

 

  constructor() {
    this.questions=[
    new Question("Valittujen lippujen kokonaismäärä? Max 4 per asiakas", "1" ),];
    this.saveall=[];
   }
}



