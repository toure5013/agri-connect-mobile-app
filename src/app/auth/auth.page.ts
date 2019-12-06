import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  message = '';

  logo: any = "../../assets/logo_ronde.jpg";
  constructor(
    private _authService: AuthService,
    private _router: Router
  ) { 
    if (this._authService.logState) {
      this._router.navigate(['permis']);
    }
  }

  ngOnInit() {
    if (this._authService.logState) {
      this._router.navigate(['permis']);
    }
  }

 
  ionViewWillEnter() {
    if (this._authService.logState) {
      this._router.navigate(['permis']);
    }
  }
  ionViewDidEnter() {
    if (this._authService.logState) {
      this._router.navigate(['permis']);
    }
  }


//   {name: "success", status: 200, message: "connecter avec succès", 
//login: true, user: {…}}
// login: true
// message: "connecter avec succès"
// name: "success"
// status: 200

  onSubmit(_ngForm: NgForm) {
    let telephone = _ngForm.value.telephone;
    let password = _ngForm.value.password;
    console.log(telephone);
    console.log(password);
    var data = {
      telephone,
      password
    }

    //Supprimer plus tard
    if (telephone == 44334233 && password == 12345678) {
      this.message = '';
      let userData = {
        id : 1,
        nom : "TOURE",
        prenom : "SOULEYMANE",
        telephone : 44334233,
      }
      this._authService.loggedIn(true, userData);
      this._router.navigateByUrl('/permis');
    }
    else {
      this._authService.login(data).subscribe(
      (data: any) => {
        console.log(data);
        if (data.status)  {
            console.log("connecté avec succès")
            this.message = '';
            this._authService.loggedIn(true, data.user);
            this._router.navigateByUrl('/permis');
          
        }
        else {
          this.message = data.message;
          //show alert message
        }
      },
      (error) => {
        console.log(error)
      })

    // if( telephone != 44334233 || password != 12345678){
    //   console.log("Erreur d'identifiant");
    //   return;
    // }
  }
}


}
