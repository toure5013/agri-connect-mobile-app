import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  logo: any = "../../../assets/logo_ronde.jpg";

  constructor() { }

  ngOnInit() {
  }


  onSubmit(_ngForm: NgForm) {
    let nom = _ngForm.value.nom;
    let prenom = _ngForm.value.prenom;
    let telephone = _ngForm.value.telephone;
    let password =_ngForm.value.password;
    let passwordConfirm =_ngForm.value.passwordConfirm;
    console.log(nom);
    console.log(prenom);console.log(telephone);
    console.log(password);
    console.log(passwordConfirm);
    
    if(/*condition invalider inscription*/0){
      console.log("Erreur d'identifiant");
      return;
    }
    console.log("ok")
    // this._router.navigateByUrl('/permis')
    }
}
