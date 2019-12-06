import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-demander-permis',
  templateUrl: './demander-permis.page.html',
  styleUrls: ['./demander-permis.page.scss'],
})
export class DemanderPermisPage implements OnInit {

  constructor(
    private _router: Router,
    private _alertControle: AlertController
  ) { }

  ngOnInit() {
  }

  onSubmit(_ngForm: NgForm) {

    let localite = _ngForm.value.localite;
    
    this._alertControle.create({
      header: 'Confirmation',
      message: 'Vous allez recevoir un message de confirmation par sms.Merci !',
      buttons: [
        // {
        //   text: 'Cancel',
        //   role: 'cancel'
        // },
        {
          text: 'Ok',
          handler: () => {
            this._router.navigateByUrl('/permis/etat-permis');
          }
        }
      ]
    }).then(
      alertElement=> {
        alertElement.present();
      });    
  } 
}
