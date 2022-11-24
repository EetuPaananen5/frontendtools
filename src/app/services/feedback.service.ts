import { Injectable } from '@angular/core';
import { Question } from '../question';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
//questions: Question[] = [new Question("Kysymys 1", "Ei Arvosteltu" ), new Question("Kysymys 2", "Ei Arvosteltu" ), new Question("Kysymys 3", "Ei Arvosteltu")];

questions: Array<Question>;

  getData():any{
    return this.questions
  } 

  constructor() {
    this.questions=[
    new Question("Kysymys 1", "Ei Arvosteltu" ), 
    new Question("Kysymys 2", "Ei Arvosteltu" ), 
    new Question("Kysymys 3", "Ei Arvosteltu")];
   }
}
