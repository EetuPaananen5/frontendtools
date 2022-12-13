import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
import { BehaviorSubject, } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';



@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  navigate(arg0: string[]) {
    throw new Error('Method not implemented.');
  }

  private userEmail: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(public afAuth: AngularFireAuth, public router: Router) {

    //subscribe methodi tilaa firebase kirjautuneen käyttäjän meilin
    //http pyynnön vastaanottava muuttuja on userEmail
    //jos käyt kirjautunu niin sposti tallenetaan userEmail muuttujaan
    this.afAuth.authState.subscribe(user => {
      let userEmail = user?.email as string;
      if (user != null) this.userEmail.next(userEmail)
    });
  }

  login(email: any, password: any) {
    console.log(email.value + 'TÄSSÄ AUTHSERVICE EMAIL');
    console.log(password.value + 'PASWORD JOUU');
    return this.afAuth.signInWithEmailAndPassword(email.value , password.value)
      .then(result => {
        this.userEmail.next(email);
        this.router.navigate(['admin']);
      })
      .catch((error) => {
        console.log(error.message)
      });

  }


  logout(email: string, password: string) {
    return this.afAuth.signOut()
      .then(() => {
        console.log("Succesfully logged out")
        sessionStorage.clear();
        this.userEmail.next(email);
        this.router.navigate(['login'])
      })
      .catch((error) => {
        console.log(error.message)
      });

  }


  getLoggedInUser(): any {

    return this.afAuth.authState;
  }


  checkLoggedInUser() {

    return this.userEmail;
  }

  BehaviorSubject(userEmail: any){
    return this.userEmail
   
  }

}
