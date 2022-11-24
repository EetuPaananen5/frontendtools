import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { FeedbackService } from '../services/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  questions: Question[] ;
 
 // questions: Question[] = [new Question("Kysymys 1", "Ei Arvosteltu" ), new Question("Kysymys 2", "Ei Arvosteltu" ), new Question("Kysymys 3", "Ei Arvosteltu")];

  onInputChange(e : any, q: Question): void {
      //q.answear= e.value; , tulostaa valuen arvon eli numeron

    console.log(e.value);
    console.log(q.question);
    console.log(q.answear);

    if(e.value==0){
      q.answear="ei oo käsitelty";
      console.log(e.value);
    }
    if(e.value==1){
      q.answear="huono";
      console.log(e.value);
    }
    if(e.value==2){
      q.answear="iha ok";
      console.log(e.value);
    }
    if(e.value==3){
      q.answear="hyvä ";
      console.log(e.value);
    }

  }

  constructor(fbservice: FeedbackService) { 
    this.questions = fbservice.getData();
    //questions=fbservice.getData();
  }

  ngOnInit(): void {
    
  }

}
