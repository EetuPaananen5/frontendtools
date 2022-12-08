import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TemplateComponent } from './template/template.component';
import { CinemaComponent } from './cinema/cinema.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './share/auth.guard';


const routes: Routes = [
 {path: 'calculator', component : CalculatorComponent},
 {path: 'feedback', component : FeedbackComponent},
 {path: 'helloworld', component: HelloworldComponent},
 {path: '', redirectTo: '/calculator', pathMatch: 'full'},
 {path: 'template', component: TemplateComponent},
 {path: 'reactiveform', component: ReactiveformComponent},
 {path: 'cinema', component: CinemaComponent},
 {path: 'admin', component: AdminComponent, canActivate:[AuthGuard]},
 {path: 'login', component: LoginComponent},
  
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
