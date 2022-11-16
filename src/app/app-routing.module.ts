import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HelloworldComponent } from './helloworld/helloworld.component';

const routes: Routes = [
 {path: 'calculator', component : CalculatorComponent},
 {path: 'feedback', component : FeedbackComponent},
 {path: 'helloworld', component: HelloworldComponent},
 {path: '', redirectTo: '/calculator', pathMatch: 'full'},
  
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
