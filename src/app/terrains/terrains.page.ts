import { Component, OnInit } from '@angular/core';
import { SegmentChangeEventDetail } from '@ionic/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';


import { TerrainsService } from '../services/terrains.service';
import { InfoTerrainComponent } from './info-terrain/info-terrain.component';

@Component({
  selector: 'app-terrains',
  templateUrl: './terrains.page.html',
  styleUrls: ['./terrains.page.scss'],
})
export class TerrainsPage implements OnInit {

  searchFormGroup: FormGroup;
  interfaceAcheter: boolean = true;
  interfaceLouer: boolean = false;
  terrainsAcheter: any[] = [];
  terrainsLouer: any[];

  constructor(
    private _terrainService: TerrainsService,
    // private _alertController: AlertController,
    private _modalController: ModalController,
    private _loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.terrainsAcheter = this._terrainService.getTerrains;

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

        setTimeout(() => {
          loadingController.dismiss();
        }, 1000)
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
    console.log(event.detail.value);

    //Location de terrain
    if (event.detail.value === "louer") {
      //Afficher les terrains à louer
      this.interfaceAcheter = false;
      this._loadingController.create({
        message: "Recherche en cours..."
      }).then(
        (loadingController) => {
          loadingController.present();
          //Rechercher depuis le service
          this.interfaceLouer = true;
          this.terrainsAcheter = []; //Terrain à louer 
          this.terrainsLouer = this._terrainService.getTerrainsLouer;

          setTimeout(() => {
            loadingController.dismiss();
          }, 500)
        });
    }
    //Achat de terrain
    else {
      //Afficher les terrains à acheter
      this.interfaceLouer = false;
      this._loadingController.create({
        message: "Recherche en cours..."
      }).then(
        (loadingController) => {
          loadingController.present();

          //Rechercher depuis le service
          this.interfaceAcheter = true;
          this.terrainsLouer = [];
          this.terrainsAcheter = this._terrainService.getTerrains; //Terrain à acheter 
          setTimeout(() => {
            loadingController.dismiss();
          }, 500)
        });
    }
  }





  onInfoAcheter(i: number) {
    let info = this.terrainsAcheter[i];
 
    if(!info){
      return; //Créer un alert pour dire que ce terrain n'existe
    }

    this._modalController.create(
      {
        component: InfoTerrainComponent,
        componentProps: { selectedTerrain: this.terrainsAcheter[i], typeAffaire: "achat" },
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




  onInfoLocation(id: number) {
    let info = this.terrainsLouer[id];

    if (!info) {
      return; //Information terrain 
    }
    this._modalController.create(
      {
        component: InfoTerrainComponent,
        componentProps: { selectedTerrain: info, typeAffaire: "location" },
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
