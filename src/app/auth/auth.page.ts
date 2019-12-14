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
    if (this._authService.getLogState) {
      this._router.navigate(['permis']);
    }
  }

  ngOnInit() {
    if (this._authService.getLogState) {
      this._router.navigate(['permis']);
    }
  }


  ionViewWillEnter() {
    if (this._authService.getLogState) {
      this._router.navigate(['permis']);
    }
  }
  ionViewDidEnter() {
    if (this._authService.getLogState) {
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
    var data = {
      telephone,
      password
    }

    //Supprimer plus tard
    if (telephone == 44334233) {
      if (password == 12345678) {
        this.message = 'connecté avec succès';
        let userData = {
          id: 1,
          nom: "TOURE",
          prenom: "SOULEYMANE",
          telephone: 44334233,
        }
        console.log("connecté avec succès");
        this._authService.setUserData(userData);

        this._authService.setLogState(true);

        this._router.navigateByUrl('/permis');
      } else {
        this.message = "Mot de passe invalide"
      }

    }

    else {

      this._authService.login(data).subscribe(
        (dataReturned: any) => {

          console.log(data);

          if (dataReturned.status) {
            console.log("connecté avec succès")
            this.message = 'connecté avec succès';

            this._authService.setUserData(dataReturned.user);

            this._router.navigateByUrl('/permis');

          }
          else {
            this.message = dataReturned.message;
            //show alert message
          }
        },
        (error) => {
          console.log(error)
          this.message = JSON.stringify(error.message);
        });
    }
  }


}
