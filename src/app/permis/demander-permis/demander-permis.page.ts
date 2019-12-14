import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Plugins, CameraResultType } from '@capacitor/core';

const { Camera } = Plugins;



@Component({
  selector: 'app-demander-permis',
  templateUrl: './demander-permis.page.html',
  styleUrls: ['./demander-permis.page.scss'],
})
export class DemanderPermisPage implements OnInit {


  etatScanne: boolean = false;
  image1Url : any;
  image2Url: any;
  
  constructor(
    private _router: Router,
    private _alertControle: AlertController,
    private _toastCtrl: ToastController
    // private _cameraOptions: CameraOptions
  ) { }


  ngOnInit() {
  
    this._alertControle.create({
      header: 'Scanner les papiers',
      message: 'Avez déjà scanner vos papier ou vous souhaiter le faire dans l\'application ?',
      buttons: [
        {
          text: 'J\'ai dejà scanner',
          handler: () => {
            this.etatScanne = true;
          }
        },
        {
          text: 'Pas encore scanner',
          handler: () => {
            this.etatScanne = false;
          }
        }
      ]
    }).then(
      alertElement=> {
        alertElement.present();
    }); 
  }

  ionViewDidEnter() {    
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


  
  async takeThirstPicture() {
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.Uri
    });
    // image.webPath will contain a path that can be set as an image src. 
    // You can access the original file using image.path, which can be 
    // passed to the Filesystem API to read the raw data of the image, 
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    var imageUrl = image.webPath;
    // Can be set to the src of an image now
    this.image1Url = imageUrl;

  }

  async takeSecondPicture() {
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.Uri
    });
    // image.webPath will contain a path that can be set as an image src. 
    // You can access the original file using image.path, which can be 
    // passed to the Filesystem API to read the raw data of the image, 
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    var imageUrl = image.webPath;
    // Can be set to the src of an image now
    this.image2Url = imageUrl;
  }

  onSubmitForm() {
    // let newView = new NatureView(
    //   this.natureViewForm.get('name').value,
    //   new Date(),
    //   this.natureViewForm.get('description').value,
    //   this.latitude,
    //   this.longitude,
    //   this.image1Url,
    //   this.image2Url,
    // );
    // this.natureViewService.addNatureView(newView);
    // this.navCtrl.pop();
  }


}
