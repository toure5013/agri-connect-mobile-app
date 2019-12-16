import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SegmentChangeEventDetail } from '@ionic/core';
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
      header: 'Comment deposer ces documents?',
      message: '<p style="text-align:center">Ici vous avez deux possibilités, si vos papier son dejà scanner et mise dans votre téléphone, vous pouvez déposer directement en cliquant sur "déjà scanner" sinon vous pouvez utiliser l\'appareil photo de votre téléphone en cliquant sur "prendre photo" pour prendre vos documents en photos et les envoyés ! </p> ',
      buttons: [
        {
          text: 'Ok j\'ai compris',
          role: 'cancel'
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

  onSubmitForm(DemanderCertificatform: NgForm) {
    let newView = {
      certificatVillageois : this.image1Url,
      document2 : this.image2Url,
    }
      
    console.log(newView);
  }


  // documentScanner documentEnphoto
  onSegmentChanged(event: CustomEvent<SegmentChangeEventDetail>) {
    console.log(event.detail.value);

    //Prendre les photos
    if (event.detail.value === "documentScanner") {
      //Afficher le depot des dossiers par prise de photo
      this.etatScanne = true;
    }
    //Uploder les documents
    else {
      //Afficher le depot des dossiers par uploader les document
      this.etatScanne = false;
    }



  }


}
