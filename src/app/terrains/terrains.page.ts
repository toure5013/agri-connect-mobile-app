import { Component, OnInit } from '@angular/core';
import { SegmentChangeEventDetail } from '@ionic/core';
import { AlertController, ModalController, LoadingController } from '@ionic/angular';


import { TerrainsService } from '../services/terrains.service';
import { InfoTerrainComponent } from './info-terrain/info-terrain.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-terrains',
  templateUrl: './terrains.page.html',
  styleUrls: ['./terrains.page.scss'],
})
export class TerrainsPage implements OnInit {

  searchFormGroup: FormGroup;
  terrains: any[] = [];
  constructor(
    private _terrainService: TerrainsService,
    private _alertController: AlertController,
    private _modalController: ModalController,
    private _loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.terrains = this._terrainService.getTerrains;

    this.searchFormGroup = new FormGroup(
      {
        search: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required]
        })
      });
  }

  onSearch() {
    console.log("Rechercher...");

    if (!this.searchFormGroup.valid) {
      return;
    }

    let keyWord = this.searchFormGroup.value.search;

    this._loadingController.create({
      message: "Recherche en cours..."
    }).then(
      (loadingController) => {
        loadingController.present();

        //Rechercher depuis le service
        this._terrainService.searchTerrain(keyWord);

        setTimeout(()=>{
          loadingController.dismiss();
        },1000)
        // .subscribe(
        //   (searchedTerrains) => {
        //     //Faire la mise à jour des terrains
        //     this.terrains = searchedTerrains;
        //     // this.searchFormGroup.reset();
        //     // this._router.navigateByUrl('/places/tabs/offers');
        //   });
      });
  }

  onSegmentChanged(event: CustomEvent<SegmentChangeEventDetail>) {
    console.log(event.detail);
    if (event.detail.value === "louer") {
      //Afficher les terrains à louer
    } else {
      //Afficher les terrains à acheter
    }
  }

  onInfo(i: number) {
    let info = this.terrains[i];
    // this._alertController.create({
    //   header : "Information du terrain",
    //   message : `<span style="color:red"> Prix : ${info.cost} \n<br> Lacalisation : ${info.localisation} \n<br> Superficie : ${info.superficie}</span>`,
    //   buttons : [
    //     {
    //       text : 'Ok',
    //       role: 'cancel'
    //     }
    //   ]
    // }).then(
    //   (alertElement)=>{
    //     alertElement.present();
    //   });

    this._modalController.create(
      {
        component: InfoTerrainComponent,
        componentProps: { selectedTerrain: this.terrains[i] },
        id: 'infoTerrain'
      }).then(
        modelElement => {
          modelElement.present();
          return modelElement.onDidDismiss();
        }).then(
          resultData => {
            console.log(resultData.data, resultData.role);
            if (resultData.role === 'confirm') {
              console.log('confirmed!!!');
            }
          });
  }
}
