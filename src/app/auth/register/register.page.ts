import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  logo: any = "../../../assets/logo_ronde.jpg";
  message: any;
  constructor(
    private _authService: AuthService,
    private _router: Router
  ) { }

  ngOnInit() {
  }


  onSubmit(_ngForm: NgForm) {
    let nom = _ngForm.value.nom;
    let prenom = _ngForm.value.prenom;
    let telephone = _ngForm.value.telephone;
    let password = _ngForm.value.password;
    let passwordConfirm = _ngForm.value.passwordConfirm;
    console.log(nom);
    console.log(prenom); console.log(telephone);
    console.log(password);
    console.log(passwordConfirm);

    var data = {
      nom,
      prenom,
      telephone,
      password,
      passwordConfirm
    };


    if (data) {
      this._authService.register(data).subscribe(
        (data) => {
          this.message = "error" + JSON.stringify(data);
          console.log("inscrit avec succès" + JSON.stringify(data))
          this._router.navigateByUrl('/permis')
        },
        error => {
          console.log("error" + JSON.stringify(error));
          this.message = "error" + JSON.stringify(error);
        })
    }
  }
}
